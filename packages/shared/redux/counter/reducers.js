import * as types from "./types"

function reducer(state = { count: 0 }, action = {}) {
	switch (action.type) {
		case types.INCREMENT:
			const { count } = state
			return {
				count: count + 1
			}
		default:
			return state;
	}
}

// Could export a combined reducer here is needed
export default reducer;
