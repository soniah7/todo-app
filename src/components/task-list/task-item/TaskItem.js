import React, { Component } from "react";
import "./TaskItem.scss";

class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { taskDescription, taskCompletionStatus } = this.props.task;
    return (
      <div className="task-item">
        <div
          className={
            taskCompletionStatus ? "check-box check-box--ticked" : "check-box"
          }
        />
        <div>{taskDescription}</div>
      </div>
    );
  }
}

export default TaskItem;
