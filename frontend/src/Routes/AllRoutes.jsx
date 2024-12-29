import React from "react";
import { Route, Routes } from "react-router-dom";
// import Products from '../Pages/Products'
import SingleProduct from "../Pages/SingleProduct";
import Homepage from "../Pages/HomePage/Homepage";
import ProductSection from "../Components/ProductSection";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import CartPage from "../Pages/CartPage/CartPage";
import Address from "../Pages/AddressPage/Address";
import Admin from "../Pages/Admin/Admin";
import Dashboard from "../Pages/Admin/Dashboard";
import Page_Not_Found from "../Pages/Page_Not_Found/Page_Not.Found";
import Payment from "../Pages/Payment/Payment";
import Order_Completed from "../Pages/Order_Completed/Order_Completed";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/products" element={<ProductSection />} />
				<Route path="/products/:id" element={<SingleProduct />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/address" element={<Address />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/orderCompleted" element={<Order_Completed />} />
				<Route path="/admin/login" element={<Admin />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Page_Not_Found />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
