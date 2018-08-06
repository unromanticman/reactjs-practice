import {
  LOGIN,
  LOGOUT
} from '../constants/actionTypes';
const defaultState = {
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state
      };
    default:
      return state;
  }
};
