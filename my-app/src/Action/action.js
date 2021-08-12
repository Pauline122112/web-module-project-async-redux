import axios from "axios";

export const getPerson = () => {
	return (dispatch) => {
		dispatch(fetchStart());
		axios
			.get("https://api.chucknorris.io/jokes/random")
			.then((res) => {
				dispatch(fetchSuccess(res.data.results[0]));
			})
			.catch((err) => {
				dispatch(fetchFail(err));
			});
	};
};

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
	return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (quote) => {
	return { type: FETCH_SUCCESS, payload: quote };
};

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
	return { type: FETCH_FAIL, payload: error };
};


export default getPerson