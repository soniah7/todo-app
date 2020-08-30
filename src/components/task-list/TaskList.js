import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "./task-item/TaskItem.js";

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        {
          taskId: 0,
          taskDescription: "first sample task",
          taskCompletionStatus: false,
        },
        {
          taskId: 2,
          taskDescription: "second sample task",
          taskCompletionStatus: true,
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    const { tasks } = this.props;
    if (
      !prevProps.tasks.task_to_add ||
      tasks.task_to_add.taskId !== prevProps.tasks.task_to_add.taskId
    ) {
      const taskList = [...this.state.taskList, tasks.task_to_add];
      this.setState({ taskList });
    }
  }

  render() {
    const { taskList } = this.state;
    return (
      <div>
        {taskList.map((task, index) => (
          <TaskItem id={index} task={task} />
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  {}
)(TaskList);
