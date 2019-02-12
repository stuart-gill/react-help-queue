import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//wrapper component that handles reloading and sending errors
import { AppContainer } from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
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
