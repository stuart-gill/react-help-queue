import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import { Switch, Route } from "react-router-dom";
import Moment from "moment";
import Admin from "./Admin";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(
      this
    );
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = newMasterTicketList[
        ticketId
      ].timeOpen.fromNow(true);
    });
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({ selectedTicket: ticketId });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.state.masterTicketList} />
            )}
          />
          <Route path="/newticket" component={NewTicketControl} />
          <Route
            path="/admin"
            render={props => (
              <Admin
                ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname}
                onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

//in this react/redux function, the key(s) returned are React props, and the value(s) are Redux state itmes we're mapping to those props. In this case, the whole state because masterTicketList is the only thing currently saved in store
const mapStateToProps = state => {
  return {
    masterTicketList: state
  };
};

//pass mapstatetoprops to connect()
export default connect(mapStateToProps)(App);
