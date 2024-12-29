import {
	Box,
	Heading,
	HStack,
	Stack,
	Text,
	Image,
	Spacer,
	Button,
	Badge,
	UnorderedList,
	ListItem,
	Collapse,
	useDisclosure,
	Fade,
	Divider,
	Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
// import CartProductCard from "./CartProductCard";
// import Coupons from "./Coupons";
// import CartPriceSummary from "./CartPriceSummary";
import axios from "axios";
import CartProductCard from "./CartProductCard";
import Coupon from "./Coupon";
import CartPriceSummary from "./CartPriceSummary";
import { Link } from "react-router-dom";

const CouponDescription = [
	"Whistles! Get extra 10% cashback on all prepaid orders above Rs.499. Use Code - PREP10.",
	"Wohoo! Get a free gift worth Rs.399 on all prepaid orders Use Coupon Code- GETFREEGIFT.",
];

const cartItems = [
	{
		description: "Men's Black Moon Knigh Typography Oversized T-Shirt",
		finalprice: 649,
		strickprice: 999,
		size: "M",
		Qty: 1,
		productImg:
			"https://images.bewakoof.com/t320/men-s-black-moon-knigh-typography-oversized-t-shirt-522527-1667510529-1.jpg",
	},
];

const Offers = [
	"5% Unlimited Caskback on Flipkart Axis Bank Credit Card.TCA",

	"Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000. TCA",

	"10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA",

	"Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik.TCA",

	"5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with PayZapp. TCA",
];

const Cart = () => {
	// const dispatch = useDispatch();
	// const cartdata = useSelector((store) => store.AppReducer.Cart);

	const [show, setShow] = useState(false);

	const handleCollapse = () => {
		setShow(!show);
	};

	//GET REQUEST FOR FETCHING CART ITEM DATA
	// const getCartProducts = () => {
	// 	dispatch(getCartProductsRequest());
	// 	return axios
	// 		.get(`https://justbuybackend.onrender.com/products/cart`)
	// 		.then((res) => {
	// 			console.log(res);
	// 			dispatch(getCartProductsSuccess(res.data));
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			dispatch(getCartProductsFailure());
	// 		});
	// };

	//EDIT CART ITEMS

	// const editCartProduct = (Size, Qty) => {
	// 	const newCartList = setSingleProduct({
	// 		...singleProduct,
	// 		name: title,
	// 		price: price,
	// 	});

	// 	dispatch(editCartProductRequest());
	// 	return axios
	// 		.patch(`http://localhost:8080/products/cart`, {
	// 			Size: Size,
	// 			Qty: Qty,
	// 		})
	// 		.then((res) => {
	// 			dispatch(editCartProductSuccess(newCartList));
	// 		})
	// 		.catch((error) => {
	// 			dispatch(editCartProductFailure());
	// 		});
	// };

	// Delete single item from cart

	// const removeFromCartHandler = (id) => {
	// 	console.log("hello", id);
	// 	const afterDelete = cartdata.filter((item) => item._id !== id);

	// 	const Token = getLocalData("userToken");

	// 	dispatch(deleteCartProductRequest());

	// 	return axios
	// 		.delete(`https://justbuybackend.onrender.com/products/cart/${id}`, {
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				authorization: "Bearer" + " " + Token,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			dispatch(deleteCartProductSuccess(afterDelete));
	// 		})
	// 		.catch((error) => {
	// 			dispatch(deleteCartProductFailure());
	// 		});
	// };

	// const totalFinalPrice = cartdata.reduce(
	// 	(previousValue, currentValue) =>
	// 		previousValue + Number(currentValue.finalprice),
	// 	0
	// );

	// const totalStrickPrice = cartdata.reduce(
	// 	(previousValue, currentValue) =>
	// 		previousValue +
	// 		Number(
	// 			currentValue.strickprice.slice(1, currentValue.strickprice.length - 1)
	// 		),
	// 	0
	// );

	const priceSummary = [
		{
			left: "Total MRP (Incl. of taxes)",
			// right: totalStrickPrice,
			right: "999",
		},
		{
			left: "Shipping Charges",
			right: "FREE",
		},
		{
			left: "Bag Discount",
			// right: totalStrickPrice - totalFinalPrice,
			right: "400",
		},
		{
			left: "Price After Discount (Incl. of taxes)",
			// right: totalFinalPrice,
			right: "599",
		},
	];

	// useEffect for fetching cart item for the mounting phase
	// useEffect(() => {
	// 	getCartProducts();
	// }, []);

	return (
		<Box width={"100%"} my="120px">
			<Box width={"70%"} m={"auto"} my={"30px"} mb="60px">
				{/* <HStack spacing="5px" pb={"20px"}>
					<Heading fontSize={"17px"}>My Bag</Heading>

					<Text fontSize={"17px"}>{`${0} item`}</Text>
				</HStack> */}

				{/* left and right */}

				<Stack spacing={4} direction={["column", "row"]}>
					{/* left box */}
					<Box w={["100%", "65%"]}>
						<HStack
							px={4}
							py={3}
							fontSize={"13px"}
							borderRadius="5px"
							border="1px solid #f3f3f3"
						>
							<Text>
								Deliver to: <Badge fontSize={"13px"}>{`${"560017"}`}</Badge>
							</Text>
							<Spacer />
							<Button
								colorScheme={"pink"}
								variant={"outline"}
								borderRadius="none"
								fontSize={"12px"}
							>
								{" "}
								CHANGE ADDRESS
							</Button>
						</HStack>

						{/* Available offer */}

						<Box
							mt={2}
							p={4}
							pb={1}
							fontSize={"13px"}
							borderRadius="2px"
							border="1px solid #f3f3f3"
						>
							<HStack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									class="offersV2-base-discountIcon"
								>
									<g fill="#000" fill-rule="evenodd">
										<path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path>
										<path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path>
									</g>
								</svg>

								<Text px={"2px"} fontWeight="bold">
									Available Offers
								</Text>
							</HStack>

							<Box mt={2}>
								<Collapse startingHeight={20} in={show}>
									<UnorderedList color={"grey"} px={2} spacing={2}>
										{Offers.map((item) => (
											<ListItem>{item}</ListItem>
										))}
									</UnorderedList>
								</Collapse>
								<Button
									variant={"ghost"}
									_hover={"none"}
									onClick={handleCollapse}
									colorScheme={"pink"}
									fontSize="12px"
								>
									Show {show ? "Less" : "More"}{" "}
									{show ? (
										<RiArrowUpSLine fontSize={"15px"} />
									) : (
										<RiArrowDropDownLine fontSize={"20px"} />
									)}
								</Button>
							</Box>
						</Box>

						{/* Bag items Count */}

						<HStack px={4} py={3} fontSize={"13px"}>
							<Text fontSize={"14px"} fontWeight="bold">
								Bag Items: {`${"0"}`}
							</Text>
							<Spacer />
							<Button
								variant={"outline"}
								colorScheme="gray"
								color={"grey"}
								border="none"
								borderRadius="none"
								fontSize={"12px"}
							>
								{" "}
								REMOVE
							</Button>
							<Center height="40px">
								<Divider orientation="vertical" />
							</Center>

							<Button
								variant={"outline"}
								colorScheme="gray"
								color={"grey"}
								border="none"
								borderRadius="none"
								fontSize={"12px"}
							>
								{" "}
								MOVE TO WISHLIST
							</Button>
						</HStack>

						{/* products */}

						{cartItems.map((item) => (
							<CartProductCard {...item} />
						))}
					</Box>

					{/* right box */}
					<Box
						w={["100%", "35%"]}
						pl={["0px", "15px"]}
						borderLeft={["none", "1px solid #f3f3f3"]}
					>
						<Box
							fontSize="12px"
							lineHeight={"1.5rem"}
							pb={1}
							mb={5}
							borderBottom={"1px solid #f3f3f3"}
						>
							<Text color={"black"} fontWeight={"bold"} mb={2}>
								COUPONS
							</Text>
							<HStack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									class="coupons-base-couponIcon"
								>
									<g
										fill="none"
										fill-rule="evenodd"
										transform="rotate(45 6.086 5.293)"
									>
										<path
											stroke="#000"
											d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"
										></path>
										<circle
											cx="5.35"
											cy="5.35"
											r="1.35"
											fill="#000"
											fill-rule="nonzero"
										></circle>
									</g>
								</svg>

								<Text px={"2px"} fontWeight="bold">
									Apply Coupons
								</Text>

								<Spacer />

								<Coupon />
							</HStack>

							<Text color={"gray"} fontWeight={"bold"} mb={2}>
								<Badge bg={"none"} color="#d90166">
									Login
								</Badge>{" "}
								to get upto ₹200 OFF on first order
							</Text>
						</Box>

						{/* Price summary */}

						<Box fontSize={"13px"}>
							<Box mb={2} py={2.5} w={"100%"}>
								<Text fontWeight={"bold"}>{`PRICE DETAILS (${1} Item)`}</Text>
							</Box>

							<CartPriceSummary data={priceSummary} />

							<Box mt={2}></Box>
						</Box>

						{/* total and Add address */}

						{/* coupon redeem  */}
						<Box
							py={1.5}
							borderTop="1px solid rgb(234, 234, 234)"
							lineHeight={"1.2rem"}
						>
							<HStack borderRadius="5px" fontSize={"13px"} w={"100%"} py={2}>
								<Text fontWeight={"bold"}>Total Amount</Text>
								<Spacer />
								<Text fontWeight={"bold"}>₹ 599</Text>
							</HStack>
						</Box>

						<Link to="/address">
							<Button
								colorScheme={"pink"}
								variant={"solid"}
								borderRadius="none"
								fontSize={"14px"}
								width="100%"
							>
								PLACE ORDER
							</Button>
						</Link>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
};

export default Cart;
