import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "mobx-react";
import TasksStore from "./mobx/TasksStore.js";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <Provider TasksStore={TasksStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
