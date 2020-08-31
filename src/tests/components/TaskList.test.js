import { shallow } from "enzyme";
import React from "react";
import { TaskList } from "../../components/task-list/TaskList";
import { InputField } from "../../components/input-field/InputField";
import { CompletionStatus } from "../../components/header/completion-status/CompletionStatus";
import TasksStore from "../../mobx/TasksStore";

describe("Task List", () => {
  const selectors = {
    checkBox: ".task-item__checkbox",
    completionStatus: ".completion-status>strong",
    archiveButton: ".completion-status>span",
    inputField: ".input-field>input",
    addButton: ".input-field>button",
  };

  beforeEach(() => {
    TasksStore.addTask({
      taskId: 0,
      taskDescription: "Task A",
      taskCompletionStatus: false,
    });
    TasksStore.addTask({
      taskId: 1,
      taskDescription: "Task B",
      taskCompletionStatus: false,
    });
  });

  it("renders the task list initially with correct completion status", () => {
    let wrapper = shallow(<TaskList TasksStore={TasksStore} />);
    expect(wrapper.find("div").children().length).toBe(2);

    wrapper = shallow(<CompletionStatus TasksStore={TasksStore} />);
    expect(wrapper.find(selectors.completionStatus).at(0).text()).toBe("2");
    expect(wrapper.find(selectors.completionStatus).at(1).text()).toBe("2");
  });

  it("handles changing input", () => {
    const wrapper = shallow(<InputField TasksStore={TasksStore} />);
    wrapper
      .find(selectors.inputField)
      .simulate("change", { target: { value: "sample task description" } });
    expect(wrapper.find(selectors.inputField).prop("value")).toBe(
      "sample task description"
    );
  });

  it("handles adding task", () => {
    let wrapper = shallow(<InputField TasksStore={TasksStore} />);
    wrapper
      .find(selectors.inputField)
      .simulate("change", { target: { value: "sample task description" } });

    const originalListLength = TasksStore.taskList.length;
    wrapper.find(selectors.addButton).simulate("click");

    expect(TasksStore.taskList.length).toBe(originalListLength + 1);
  });

  it("handles archiving task and produces correct output", () => {
    TasksStore.taskList.forEach((task) => TasksStore.completeTask(task));
    const wrapper = shallow(<CompletionStatus TasksStore={TasksStore} />);
    wrapper.find(selectors.archiveButton).simulate("click");
    expect(TasksStore.remainingCount).toBe(0);
    expect(TasksStore.totalCount).toBe(0);
  });
});
