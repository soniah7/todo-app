import { ADD_TASK, COMPLETE_TASK, ARCHIVE_TASKS } from "./action-types";

export const addTask = (task_to_add) => ({
  type: ADD_TASK,
  task_to_add,
});

export const completeTask = (task_to_complete) => ({
  type: COMPLETE_TASK,
  task_to_complete,
});

export const archiveTasks = (task) => ({
  type: ARCHIVE_TASKS,
});
