import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TaskItem from "./task-item/TaskItem.js";

@inject("TasksStore")
@observer
class TaskList extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { TasksStore } = this.props;
    return (
      <div>
        {TasksStore.taskList.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
    );
  }
}

export default TaskList;
