import React, { Component } from "react";
import TaskItem from "./task-item/TaskItem.js";

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        {
          id: 0,
          description: "first sample task",
          completionStatus: false,
        },
        {
          id: 2,
          description: "second sample task",
          completionStatus: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.taskList.map((task) => (
          <TaskItem task={task} />
        ))}
      </div>
    );
  }
}

export default TaskList;
