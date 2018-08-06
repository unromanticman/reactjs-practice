import {
  SET_TESTDATA,
  CLEAN_TESTDATA
} from '../constants/actionTypes';
const defaultState = {
  testdata: []
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TESTDATA:
      return {
        ...state,
        testdata: action.payload.data
      };
    case CLEAN_TESTDATA:
      return {
        ...state,
        testdata: []
      };
    default:
      return state;
  }
};
