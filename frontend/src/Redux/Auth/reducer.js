import * as actionTypes from "./actionTypes";
import { getLocalData } from "../../Utils/LocalStorage";
import { SaveTheToken } from "../../Utils/LocalStorage";

const initialState = {
	isLoading: false,
	isError: false,
	isAuth: false,
	token: getLocalData("myntraToken") || null,
	userId: getLocalData("userId") || null,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SIGNUP_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.SIGNUP_SUCCESS:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.SIGNUP_FAILURE:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case actionTypes.LOGIN_SUCCESS:
			const token = (state.token = payload.token);
			const userId = (state.userId = payload.userId);
			SaveTheToken("myntraToken", token);
			SaveTheToken("userId", userId);
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: true,
				token: payload.token,
				userId: payload.userId,
			};

		case actionTypes.LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
				isAuth: false,
				token: null,
			};
		default:
			return state;
	}
};
