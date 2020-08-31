import { observable, action, computed } from "mobx";
class TasksStore {
  @observable taskList = [];

  @action
  addTask = (task_to_add) => {
    this.taskList.push(task_to_add);
  };

  @action
  completeTask = (task_to_complete) => {
    this.taskList.forEach((task) => {
      if (task_to_complete.taskId === task.taskId) {
        task.taskCompletionStatus = true;
      }
    });
  };

  @action
  archiveTasks = () => {
    this.taskList = this.taskList.filter((task) => !task.taskCompletionStatus);
  };

  @computed
  get remainingCount() {
    return this.taskList.filter((task) => !task.taskCompletionStatus).length;
  }

  @computed
  get totalCount() {
    return this.taskList.length;
  }
}

const store = new TasksStore();
export default store;
