import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import { Switch, Route, withRouter } from "react-router-dom";
import Moment from "moment";
import Admin from "./Admin";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends React.Component {
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
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = newMasterTicketList[
    //     ticketId
    //   ].timeOpen.fromNow(true);
    // });
    // this.setState({ masterTicketList: newMasterTicketList });
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
              <TicketList ticketList={this.props.masterTicketList} />
            )}
          />
          <Route path="/newticket" component={NewTicketControl} />
          <Route
            path="/admin"
            render={props => (
              <Admin currentRouterPath={props.location.pathname} />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

//in this react/redux function, the key(s) returned are React props, and the value(s) are Redux state itmes we're mapping to those props.
const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

App.propTypes = {
  masterTicketList: PropTypes.object
};

//pass mapstatetoprops to connect()
export default withRouter(connect(mapStateToProps)(App));
