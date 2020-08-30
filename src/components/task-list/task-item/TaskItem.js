import React, { Component } from "react";
import { connect } from "react-redux";
import { completeTask, archiveTasks } from "../../../redux/action";
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
          onClick={() => {
            this.props.completeTask(this.props.task);
            this.props.archiveTasks(false);
          }}
        />
        <div>{taskDescription}</div>
      </div>
    );
  }
}

export default connect(() => ({}), { completeTask, archiveTasks })(TaskItem);
