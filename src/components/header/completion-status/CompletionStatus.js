import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./CompletionStatus.scss";

@inject("TasksStore")
@observer
class CompletionStatus extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { remainingCount, totalCount } = this.props.TasksStore;
    return (
      <div className="completion-status">
        <strong>{remainingCount}</strong> of
        <strong> {totalCount}</strong> remaining [
        <span
          onClick={() => {
            this.props.TasksStore.archiveTasks();
          }}
        >
          archive
        </span>
        ]
      </div>
    );
  }
}

export default CompletionStatus;
