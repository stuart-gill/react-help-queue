import React from "react";
import ConfirmationQuestions from "./ConfirmationQuestions";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {
  constructor(props) {
    //super is called to access parent class's constructor... in this case super accesses the React.Component constructor. This ensures our component is instantiated with all the ReactComponent functionality
    super(props);

    //you can have more than one state, comma separated inside the curlies
    this.state = {
      formVisibleOnPage: false
    };

    //necessary to bind this function to the NewTicketControl class. By default class methods are not bound, so this.method() will not work without binding
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(
      this
    );
  }

  //this event handler doesn't need function keyword because it's inside class
  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = (
        <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation} />
      );
    } else {
      currentlyVisibleContent = (
        <ConfirmationQuestions
          onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}
        />
      );
    }
    return <div>{currentlyVisibleContent}</div>;
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
