// NOTE: DO NOT MODIFY the intial state structure in this file.

import * as types from "./actionType";

const initialState = {
	isLoading: false,
	isError: false,
	Products: [],
	SingleProduct: [],
	Cart: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//All Products

		case types.GET_DATA_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.GET_DATA_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.GET_DATA_FAILURE: {
			return {
				...state,
				Products: [],
				isLoading: false,
				isError: true,
			};
		}

		//Single Products

		case types.GET_DATA_SINGLE_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.GET_DATA_SINGLE_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.GET_DATA_SINGLE_FAILURE: {
			return {
				...state,
				SingleProduct: [],
				isLoading: false,
				isError: true,
			};
		}

		//cart items

		case types.GET_CART_PRODUCTS_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.GET_CART_PRODUCTS_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.GET_CART_PRODUCTS_FAILURE: {
			return {
				...state,
				Cart: [],
				isLoading: false,
				isError: true,
			};
		}

		//add cart item

		case types.ADD_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.ADD_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				Cart: [...state.Cart, payload],
				isLoading: false,
				isError: false,
			};
		}

		case types.ADD_CART_PRODUCT_FAILURE: {
			return {
				...state,
				Cart: state.Cart,
				isLoading: false,
				isError: true,
			};
		}

		//delete cart item

		case types.DELETE_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.DELETE_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.DELETE_CART_PRODUCT_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}

		//edit cart item

		case types.EDIT_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.EDIT_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				products: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.EDIT_CART_PRODUCT_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}
		default:
			return state;
	}
};

export { reducer };
