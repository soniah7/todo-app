import React from "react";
import { inject, observer } from "mobx-react";
import "./TaskItem.scss";

const TaskItem = inject("TasksStore")(
  observer(({ TasksStore, taskItem }) => {
    const { taskDescription, taskCompletionStatus } = taskItem;
    return (
      <div className="task-item">
        <div
          className={
            taskCompletionStatus
              ? "task-item__checkbox task-item__checkbox--ticked"
              : "task-item__checkbox"
          }
          onClick={() => {
            TasksStore.completeTask(taskItem);
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
  })
);

export default TaskItem;
