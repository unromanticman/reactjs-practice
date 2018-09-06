import {
  SET_TESTDATA,
  CLEAN_TESTDATA
} from '../constants/actionTypes';
const defaultState = {
  testdata: []
};
export default (state = defaultState, { type = "", payload = { reducer: "" } }) => {
  if (payload.reducer === "testPage") {
    switch (type) {
      case SET_TESTDATA:
        return {
          ...state,
          testdata: payload.data
        };
      case CLEAN_TESTDATA:
        return {
          ...state,
          testdata: []
        };
      default:
        return state;
    }
  }
  else {
    return state;
  }
};
