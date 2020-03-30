import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./reducer/counterReducer";
import App from "./App";

const reducer = combineReducers({
  counter: counterReducer
});

/*
const reducer = combineReducers({
  counter: {
    counter: 0
  }
});
*/

const myStore = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
