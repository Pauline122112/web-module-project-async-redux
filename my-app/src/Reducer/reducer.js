import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "./../Action/action";

const initiateState = {
	quote: {
		icon_url: "",
		id: "",
		url: "",
		value: "",
	},

	isFetching: false,
	error: "",
};

export const postReducer = (state = initiateState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isFetching: true,
				error: "",
			};

		case FETCH_SUCCESS:
			return {
				...state,
				quote: action.payload,
				isFetching: false,
			};

		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};

	}
};


export default postReducer

// switch (action.type){
//     case "INCREMENT":
//     return state +1
//     case "DECREMENT":
//         return state -1
//         default:
//             return state
