import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";

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
      <TicketList />
    </div>
  );
}

export default App;
