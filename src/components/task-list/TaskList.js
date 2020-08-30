import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "./task-item/TaskItem.js";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { tasks } = this.props;
    if (JSON.stringify(this.props) !== JSON.stringify(this.prevProps)) {
      if (tasks.task_to_add) {
        if (
          !prevProps.tasks.task_to_add ||
          tasks.task_to_add.taskId !== prevProps.tasks.task_to_add.taskId
        ) {
          const taskList = [...this.state.taskList, tasks.task_to_add];
          this.setState({ taskList });
        }
      }
      if (tasks.task_to_complete) {
        if (
          !prevProps.tasks.task_to_complete ||
          tasks.task_to_complete.taskId !==
            prevProps.tasks.task_to_complete.taskId
        ) {
          // const { taskList } = this.state;
          // const taskList = Array.from(this.state.taskList);
          var taskList = JSON.parse(JSON.stringify(this.state.taskList));
          taskList.forEach((task) => {
            if (task.taskId === tasks.task_to_complete.taskId) {
              task.taskCompletionStatus = true;
            }
          });
          this.setState({ taskList });
        }
      }
    }
  }

  render() {
    const { taskList } = this.state;
    return (
      <div>
        {taskList.map((task, index) => (
          <TaskItem key={index} task={task} />
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
