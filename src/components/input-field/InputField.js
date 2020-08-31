import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, archiveTasks } from "../../redux/action";
import "./InputField.scss";

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      taskId: 0,
      taskDescription: "",
      taskCompletionStatus: false,
    };
  }

  handleSubmit = (e) => {
    if (this.state.taskDescription) {
      const taskId = this.state.taskId + 1;
      this.setState({ taskId });
      this.props.addTask(this.state);
      this.props.archiveTasks(false);
      this.setState({ taskDescription: "" });
    } else {
      alert("Please type in your task name before submit");
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

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  { addTask, archiveTasks }
)(InputField);
