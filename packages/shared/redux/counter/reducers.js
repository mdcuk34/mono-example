import * as types from "./types";

function reducer(state = { count: 0 }, action = {}) {
  const { count } = state;
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: count + 1
      };
    case types.SET_CUSTOM_VALUE:
      return {
        count: action.payload
      };
    default:
      return state;
  }
}

// Could export a combined reducer here is needed
export default reducer;
