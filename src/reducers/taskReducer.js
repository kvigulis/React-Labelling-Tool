import _ from 'lodash';
import {
  FETCH_TASKS,
  FETCH_TASK,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from "../actions/types";


const test_tasks = {
  1: {
    categories: [
      {name: 'dog', level: 0, hotkey: 1},
      {name: 'cat', level: 0, hotkey: 2}
    ]
  }
};



//Object base approach
const taskReducer = (state = test_tasks, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_TASK:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_TASK:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_TASK:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_TASK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default taskReducer;
