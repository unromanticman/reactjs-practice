import {
  LOGIN,
  LOGOUT
} from '../constants/actionTypes';
const defaultState = {
};
export default (state = defaultState, { type = "", payload = { reducer: "" } }) => {
  if (payload.reducer === "auth") {
    switch (type) {
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
  } else {
    return state;
  }
};
