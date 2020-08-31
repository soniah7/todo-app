import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import "./InputField.scss";

const InputField = inject("TasksStore")(
  observer(({ TasksStore }) => {
    const [taskDescription, setTaskDescription] = useState("");
    const [taskId, setTaskId] = useState(0);

    const handleSubmit = () => {
      if (!taskDescription) {
        alert("Please type in your task name before submit");
      } else {
        const task = {
          taskId,
          taskDescription,
          taskCompletionStatus: false,
        };
        TasksStore.addTask(task);
        setTaskDescription("");
        setTaskId(taskId + 1);
      }
    };

    return (
      <div className="input-field">
        <input
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          value={taskDescription}
        />
        <button onClick={handleSubmit}>add</button>
      </div>
    );
  })
);

export default InputField;
