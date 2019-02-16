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
      <hr />
      {props.ticketList.map((ticket, index) => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
