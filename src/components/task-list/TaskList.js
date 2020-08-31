import React from "react";
import { inject, observer } from "mobx-react";
import TaskItem from "./task-item/TaskItem.js";

export const TaskList = ({ TasksStore }) => (
  <div>
    {TasksStore.taskList.map((taskItem, index) => (
      <TaskItem key={index} taskItem={taskItem} />
    ))}
  </div>
);
export default inject("TasksStore")(observer(TaskList));
