import React from 'react';

class NewTicketControl extends React.Component {

    constructor(props) {
        //super is called to access parent class's constructor... in this case super accesses the React.Component constructor. This ensures our component is instantiated will all the ReactComponent functionality
        super(props);
        //you can have more than one state, comma separated inside the curlies
        this.state = {
            formVisibleOnPage: false
        };
    }

    render() {
        return (
            <div>
                <p>This is the NewTicketControl component!</p>
            </div>
        );
    }
}

export default NewTicketControl;
