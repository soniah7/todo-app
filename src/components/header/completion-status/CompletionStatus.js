import React, { Component } from "react";
import { connect } from "react-redux";
import { archiveTasks } from "../../../redux/action";
import "./CompletionStatus.scss";

class CompletionStatus extends Component {
  constructor() {
    super();
    this.state = {
      remainingNumber: 0,
      totalNumber: 0,
    };
  }

  handleOnClick = () => {
    this.props.archiveTasks(true);
    this.setState({
      totalNumber: this.state.remainingNumber,
    });
  };

  componentDidUpdate(prevProps) {
    const { tasks } = this.props;

    if (JSON.stringify(this.props) !== JSON.stringify(this.prevProps)) {
      if (tasks.task_to_add) {
        if (
          !prevProps.tasks.task_to_add ||
          tasks.task_to_add.taskId !== prevProps.tasks.task_to_add.taskId
        ) {
          this.setState({
            totalNumber: this.state.totalNumber + 1,
            remainingNumber: this.state.remainingNumber + 1,
          });
        }
      }
      if (tasks.task_to_complete) {
        if (
          !prevProps.tasks.task_to_complete ||
          tasks.task_to_complete.taskId !==
            prevProps.tasks.task_to_complete.taskId
        ) {
          this.setState({ remainingNumber: this.state.remainingNumber - 1 });
        }
      }
    }
  }

  render() {
    const { remainingNumber, totalNumber } = this.state;
    return (
      <div className="completion-status">
        <strong>{remainingNumber}</strong> of
        <strong> {totalNumber}</strong> remaining [
        <span onClick={this.handleOnClick}>archive</span>]
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  { archiveTasks }
)(CompletionStatus);
