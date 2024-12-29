//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType";

// ************* Products ********************

export const getDataRequest = () => {
	return {
		type: types.GET_DATA_REQUEST,
	};
};
export const getDataSuccess = (payload) => {
	return {
		type: types.GET_DATA_SUCCESS,
		payload,
	};
};
export const getDataFailure = () => {
	return {
		type: types.GET_DATA_FAILURE,
	};
};

// ************* Single Product ********************

export const getDataSingleRequest = () => {
	return {
		type: types.GET_DATA_SINGLE_REQUEST,
	};
};
export const getDataSingleSuccess = (payload) => {
	return {
		type: types.GET_DATA_SINGLE_SUCCESS,
		payload,
	};
};
export const getDataSingleFailure = () => {
	return {
		type: types.GET_DATA_SINGLE_FAILURE,
	};
};

// **************** CART ITEMS  ***********************

//get cart products

export const getCartProductsRequest = () => {
	return {
		type: types.GET_CART_PRODUCTS_REQUEST,
	};
};

export const getCartProductsSuccess = (payload) => {
	return {
		type: types.GET_CART_PRODUCTS_SUCCESS,
		payload,
	};
};

export const getCartProductsFailure = () => {
	return {
		type: types.GET_CART_PRODUCTS_FAILURE,
	};
};

//add cart product

export const addCartProductRequest = () => {
	return {
		type: types.ADD_CART_PRODUCT_REQUEST,
	};
};

export const addCartProductSuccess = (payload) => {
	return {
		type: types.ADD_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const addCartProductFailure = () => {
	return {
		type: types.ADD_CART_PRODUCT_FAILURE,
	};
};

//delete cart product

export const deleteCartProductRequest = () => {
	return {
		type: types.DELETE_CART_PRODUCT_REQUEST,
	};
};

export const deleteCartProductSuccess = (payload) => {
	return {
		type: types.DELETE_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const deleteCartProductFailure = () => {
	return {
		type: types.DELETE_CART_PRODUCT_FAILURE,
	};
};

//EDIT cart product

export const editCartProductRequest = () => {
	return {
		type: types.EDIT_CART_PRODUCT_REQUEST,
	};
};

export const editCartProductSuccess = (payload) => {
	return {
		type: types.EDIT_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const editCartProductFailure = () => {
	return {
		type: types.EDIT_CART_PRODUCT_FAILURE,
	};
};
