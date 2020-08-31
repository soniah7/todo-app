import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./TaskItem.scss";

@inject("TasksStore")
@observer
class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { taskDescription, taskCompletionStatus } = this.props.task;
    const { TasksStore } = this.props;
    return (
      <div className="task-item">
        <div
          className={
            taskCompletionStatus
              ? "task-item__checkbox task-item__checkbox--ticked"
              : "task-item__checkbox"
          }
          onClick={() => {
            TasksStore.completeTask(this.props.task);
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

export default TaskItem;
