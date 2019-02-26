import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import ticketListReducer from "./reducers/ticket-list-reducer";
import { Provider } from "react-redux";

const store = createStore(ticketListReducer);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

//wrapper component that handles reloading and sending errors
import { AppContainer } from "react-hot-loader";

//routing between components relies on all components having a router like hash router as an ancestor

const render = Component => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
};

render(App);

//this actually triggers the swapping process
//the eslint tags disable so "undefined" module doesn't throw an error
/*eslint-disable */
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
/*eslint-enable */
