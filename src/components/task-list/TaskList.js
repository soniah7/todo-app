import React from "react";
import { inject, observer } from "mobx-react";
import TaskItem from "./task-item/TaskItem.js";

const TaskList = inject("TasksStore")(
  observer(({ TasksStore }) => (
    <div>
      {TasksStore.taskList.map((taskItem, index) => (
        <TaskItem key={index} taskItem={taskItem} />
      ))}
    </div>
  ))
);
export default TaskList;
