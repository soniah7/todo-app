import React from "react";
import { inject, observer } from "mobx-react";
import "./CompletionStatus.scss";

const CompletionStatus = inject("TasksStore")(
  observer(({ TasksStore }) => {
    const { remainingCount, totalCount } = TasksStore;
    return (
      <div className="completion-status">
        <strong>{remainingCount}</strong> of
        <strong> {totalCount}</strong> remaining [
        <span
          onClick={() => {
            TasksStore.archiveTasks();
          }}
        >
          archive
        </span>
        ]
      </div>
    );
  })
);
export default CompletionStatus;
