import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./InputField.scss";

@inject("TasksStore")
@observer
class InputField extends Component {
  constructor() {
    super();
    this.state = {
      taskDescription: "",
    };
    this.id = 0;
  }

  handleSubmit = (e) => {
    const { TasksStore } = this.props;
    if (!this.state.taskDescription) {
      alert("Please type in your task name before submit");
    } else {
      const task = {
        taskId: this.id++,
        taskDescription: this.state.taskDescription,
        taskCompletionStatus: false,
      };
      TasksStore.addTask(task);
      this.setState({ taskDescription: "" });
    }
  };

  render() {
    return (
      <div className="input-field">
        <input
          onChange={(e) => {
            this.setState({
              taskDescription: e.target.value,
            });
          }}
          value={this.state.taskDescription}
        />
        <button onClick={this.handleSubmit}>add</button>
      </div>
    );
  }
}

export default InputField;
