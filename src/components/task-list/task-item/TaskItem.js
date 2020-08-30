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
            taskCompletionStatus
              ? "task-item__checkbox task-item__checkbox--ticked"
              : "task-item__checkbox"
          }
          onClick={() => {
            this.props.completeTask(this.props.task);
            this.props.archiveTasks(false);
          }}
        />
        <div
          className={
            taskCompletionStatus
              ? "task-item__description--completed"
              : "task-item__description"
          }
        >
          {taskDescription}
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), { completeTask, archiveTasks })(TaskItem);
