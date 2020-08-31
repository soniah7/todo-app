import { shallow } from "enzyme";
import React from "react";
import { TaskItem } from "../../components/task-list/task-item/TaskItem";
import TasksStore from "../../mobx/TasksStore";

describe("Task Item", () => {
  let taskItem;

  const selectors = {
    itemDescription: ".task-item__description",
    checkBox: ".task-item__checkbox",
    tickedCheckBox: ".task-item__checkbox--ticked",
  };

  beforeEach(() => {
    taskItem = {
      taskId: 2,
      taskDescription: "Task C",
      taskCompletionStatus: false,
    };
  });

  it("renders task item", () => {
    const wrapper = shallow(
      <TaskItem taskItem={taskItem} TasksStore={TasksStore} />
    );
    expect(wrapper.find(selectors.itemDescription).text()).toBe("Task C");
    expect(wrapper.find(selectors.tickedCheckBox)).toHaveLength(0);
  });

  it("handles checkbox event and updates completion status", () => {
    const wrapper = shallow(
      <TaskItem taskItem={taskItem} TasksStore={TasksStore} />
    );

    TasksStore.addTask(taskItem);
    wrapper.find(selectors.checkBox).simulate("click");

    const updatedTaskItem = TasksStore.taskList.filter(
      (task) => task.taskId === taskItem.taskId
    )[0];
    expect(updatedTaskItem.taskCompletionStatus).toBeTruthy();
  });
});
