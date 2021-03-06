import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { connect } from "react-redux";

//Ticket gets its props passed to it from TicketList. (data down action up). In React these props are a special type of argument, since all components are functions
function Ticket(props) {
  function handleSavingSelectedTicket(ticketId) {
    const { dispatch } = props;
    const action = {
      type: "SELECT_TICKET",
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation = (
    <div>
      <style jsx>{`
        div {
          background-color: #ff5252;
          border-radius: 20px;
          text-align: center;
          margin: 20px;
        }
        div:hover {
          background-color: #ffdcdc;
        }
      `}</style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr />
    </div>
  );

  if (props.currentRouterPath === "/admin") {
    return (
      <div
        onClick={() => {
          handleSavingSelectedTicket(props.ticketId);
        }}
      >
        {ticketInformation}
      </div>
    );
  } else {
    return <div>{ticketInformation}</div>;
  }
}

//PropTypes dependency allows us to declare a list of props (and data types thereof) that Ticket component accepts
//PropTypes (cap P) refers to class we imported
//propTypes (lower) declares a propTypes property on the Ticket component. This property is an object literal containing key-value pairs.
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);

// VARIOUS TYPES OF PROPTYPES:
// MyExampleComponent.propTypes = {
//     exampleArray: PropTypes.array,
//     exampleBoolean: PropTypes.bool,
//     exampleFunction: PropTypes.func,
//     exampleNumber: PropTypes.number,
//     exampleObject: PropTypes.object,
//     exampleString: PropTypes.string,
//     exampleSymbol: PropTypes.symbol,
//     exampleReactElement: PropTypes.element,
//     exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
//     exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
//     exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
//     optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass'])
//   }
