import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import Moment from "moment";
import Admin from './Admin';
import { v4 } from "uuid";

//Route is primary building block of ReactRouter
//Switch determines which route matches the path the user is requesting... if we have multiple routes, they should should reside within a switch components, which allows the router to iterate through them and locate correct route
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(
      this
    );
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({ selectedTicket: ticketId });
  }


  //three arguments of object assign below: {} empty object, existing master list, new ticket 
  handleAddingNewTicketToList(newTicket) {
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({ masterTicketList: newMasterTicketList });
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({ masterTicketList: newMasterTicketList });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  render() {
    return (
      <div>
        <style jsx global>
          {`
            body {
              font-family: "Poppins", sans-serif;
            }
          `}
        </style>
        <Header />
        <Switch>
          {/* must include "exact" when partial path is shared by other paths */}
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.state.masterTicketList} />
            )}
          />
          <Route
            path="/newticket"
            render={() => (
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList}
              />
            )}
          />
          <Route path='/admin' render={(props) => <Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
