import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import NewTicketForm from "./NewTicketForm";
//Route is primary building block of ReactRouter
//Switch determines which route matches the path the user is requesting... if we have multiple routes, they should should reside within a switch components, which allows the router to iterate through them and locate correct route
import { Switch, Route } from "react-router-dom";

function App() {
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
        <Route exact path="/" component={TicketList} />
        <Route path="/newticket" component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
