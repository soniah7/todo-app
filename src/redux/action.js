import { ADD_TASK, ARCHIVE_TASKS } from "./action-types";

export const addTask = (task_to_add) => ({
  type: ADD_TASK,
  task_to_add,
});

export const archiveTasks = (task) => ({
  type: ARCHIVE_TASKS,
});
