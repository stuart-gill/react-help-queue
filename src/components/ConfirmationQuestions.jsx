import React from "react";
import PropTypes from "prop-types";

function ConfirmationQuestions(props) {
  return (
    <div>
      <p>
        Have you gone through all the steps on the Learn How to Program
        debugging lesson?
      </p>
      {/* all valid JS DOM events may be used to trigger states in react (onMousedown, onKeypress, etc) */}
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
