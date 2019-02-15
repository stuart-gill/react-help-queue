import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

    constructor(props) {
        //super is called to access parent class's constructor... in this case super accesses the React.Component constructor. This ensures our component is instantiated will all the ReactComponent functionality
        super(props);

        //you can have more than one state, comma separated inside the curlies
        this.state = {
            formVisibleOnPage: false
        };

        //necessary to bind this function to the NewTicketControl class. By default class methods are not bound, so this.method() will not work without binding
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }

    handleTroubleshootingConfirmation() {
        this.setState({ formVisibleOnPage: true });
    }

    //all valid JS DOM events may be used to trigger states in react (onMousedown, onKeypress, etc)
    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewTicketForm />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

export default NewTicketControl;