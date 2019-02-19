import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

//passing info to Ticket component from TicketList, its parent
function TicketList(props) {
  
  return (
    <div>
      <style jsx>
        {`
          div {
            background-color: #993131;
          }
        `}
      </style>
      <hr />
      {props.ticketList.map(ticket => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
