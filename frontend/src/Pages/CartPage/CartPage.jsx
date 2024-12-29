import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../Components/Cart/Cart";
import EmptyCart from "../../Components/Cart/EmptyCart";
import {
	getCartProductsFailure,
	getCartProductsRequest,
	getCartProductsSuccess,
} from "../../Redux/AppReducer/action";
import { getLocalData } from "../../Utils/LocalStorage";

const CartPage = () => {
	const dispatch = useDispatch();
	// const cart = useSelector((store) => store.AppReducer.Cart)
	const [token, setToken] = useState(getLocalData("myntraToken"));
	console.log(token);
	const [length, setlength] = useState(0);

	const getCartProducts = () => {
		dispatch(getCartProductsRequest());

		return axios
			.get("http://localhost:8080/cart", {
				headers: { Authorization: "Bearer" + " " + token },
			})
			.then((res) => {
				console.log("RESSSSS", res.data);
				dispatch(getCartProductsSuccess(res.data));
				setlength(res.data.length);
			})
			.catch((error) => {
				console.log(error);
				dispatch(getCartProductsFailure());
			});
	};
	useEffect(() => {
		getCartProducts();
	}, [length]);
	// console.log("CARTTTTT",cart)
	return <Box>{length > 0 ? <Cart /> : <EmptyCart />}</Box>;
};

export default CartPage;
