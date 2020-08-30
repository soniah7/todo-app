import React, { Component } from "react";
import "./TaskItem.scss";

class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { description, completionStatus } = this.props.task;
    return (
      <div className="task-item">
        <div
          className={
            completionStatus ? "check-box check-box--ticked" : "check-box"
          }
        />
        <div>{description}</div>
      </div>
    );
  }
}

export default TaskItem;
