import React from "react";

import Header from "./components/header/Header";
import InputField from "./components/input-field/InputField";
import TaskList from "./components/task-list/TaskList";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <InputField />
      <TaskList />
    </div>
  );
}

export default App;
