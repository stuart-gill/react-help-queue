import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <style jsx>
        {`
          h1 {
            text-align: center;
            text-shadow: 2px 2px #cccccc;
          }
        `}
      </style>
      <h1>Helpish Queue!!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
