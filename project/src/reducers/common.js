import {
  APP_LOAD,
  REDIRECT
} from '../constants/actionTypes';
const defaultState = {
};
export default (state = defaultState, { type = "", payload = { reducer: "" } }) => {
  if (payload.reducer === "common") {
    switch (type) {
      case APP_LOAD:
        return {
          ...state
        };
      case REDIRECT:
        return { ...state, redirectTo: null };
      default:
        return state;
    }
  } else {
    return state;
  }
};
