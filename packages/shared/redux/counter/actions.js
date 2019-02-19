import * as types from "./types";
import * as helpers from "./helpers"

export function increment() {
	return {
		type: types.INCREMENT
	};
}

export function setCustomValue(payload) {
	return {
		type: types.SET_CUSTOM_VALUE,
		payload
	};
}

export function incrementAsync() {
	return async (dispatch, getState) => {
		const { counter: { count }} = getState()
		dispatch(setCustomValue("loading..."))
		const result = await helpers.incrementAsync(count)
		dispatch(setCustomValue(result))
	}
}
