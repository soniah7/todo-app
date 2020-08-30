import React, { Component } from "react";
import { connect } from "react-redux";
import { completeTask } from "../../../redux/action";
import "./TaskItem.scss";

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taskDescription, taskCompletionStatus } = this.props.task;
    return (
      <div className="task-item">
        <div
          className={
            taskCompletionStatus ? "check-box check-box--ticked" : "check-box"
          }
          onClick={() => {
            this.props.completeTask(this.props.task);
          }}
        />
        <div>{taskDescription}</div>
      </div>
    );
  }
}

export default connect(() => ({}), { completeTask })(TaskItem);
