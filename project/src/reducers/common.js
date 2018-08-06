import {
  APP_LOAD,
  REDIRECT
} from '../constants/actionTypes';
const defaultState = {
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    default:
      return state;
  }
};
