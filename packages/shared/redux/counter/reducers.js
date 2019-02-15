import * as types from "./types"

function reducer(state = 0, action = {}) {
	switch (action.type) {
		case types.INCREMENT:
			return state + 1;
		default:
			return state;
	}
}

// Could export a combined reducer here is needed
export default reducer;
