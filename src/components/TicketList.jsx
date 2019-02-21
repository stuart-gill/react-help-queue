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
      {Object.keys(props.ticketList).map(function (ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          onTicketSelection={props.onTicketSelection}
          ticketId={ticketId} />;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
