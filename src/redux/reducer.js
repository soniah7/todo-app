import { ADD_TASK, ARCHIVE_TASKS } from "./action-types";
import { combineReducers } from "redux";

const initTask = { task_to_add: "", archive_tasks: false };
function tasks(state = initTask, action) {
  switch (action.type) {
    case ADD_TASK:
      const { task_to_add } = action;
      return { ...state, task_to_add, archive_tasks: false };
    case ARCHIVE_TASKS:
      return { ...state, archive_tasks: true };
    default:
      return state;
  }
}
export default combineReducers({ tasks });
