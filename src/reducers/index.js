//index.js is the customary place to combine reducers in Redux
//this file is something called a ~MODULE INDEX~ because it's responsible for retrieving miscellaneous pieces of logic from the other files in its directory and importing it all in one big module

import selectedTicketReducer from "./selected-ticket-reducer";
import ticketListReducer from "./ticket-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;
