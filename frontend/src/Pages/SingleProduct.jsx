import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import {
	Box,
	Img,
	Text,
	Flex,
	Button,
	HStack,
	useRadioGroup,
	Toast,
} from "@chakra-ui/react";
import Styles from "../Css/Makeup.module.css";
import { BsBag } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
import SingleProductSizeButtons from "../Components/SingleProductSizeButtons";
import { getLocalData } from "../Utils/LocalStorage";
import { useDispatch } from "react-redux";
import {
	getDataSingleFailure,
	getDataSingleRequest,
	getDataSingleSuccess,
} from "../Redux/AppReducer/action";

const SingleProduct = () => {
	const [token, setToken] = useState(getLocalData("myntraToken"));
	const [user_id, setUser_id] = useState(getLocalData("userId"));
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	const [size, setSize] = useState("M");

	const [data, setData] = useState({});

	const [qty, setQty] = useState(1);

	const { id } = useParams();

	const options = ["S", "M", "L", "XL", "XXL"];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: console.log,
	});
	const group = getRootProps();

	//add to cart

	const AddToCart = (data, size, qty) => {
		console.log(data);
		console.log("Add to Bag");
		const {
			Brand,
			Price,
			Name,
			Image,
			rating,
			discount,
			OlderPrice,
			quantity,
			status,
		} = data;
		const payload = {
			Brand,
			Price,
			Name,
			Image,
			rating,
			discount,
			OlderPrice,
			quantity,
			status,
			size,
			qty,
		};
		console.log(payload);

		return axios
			.post("http://localhost:8080/cart", payload, {
				headers: { Authorization: "Bearer" + " " + token },
			})
			.then((res) => {
				console.log(res.data);

				Toast({
					title: res.data,
					description: `${
						res.data === "Product Already In The Cart" ? "error" : "success"
					}`,
					status: `${
						res.data === "Product Already In The Cart" ? "error" : "success"
					}`,
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			})
			.catch((err) => {
				console.log("Error While adding to cart", err);
				Toast({
					title: "YOU ARE NOT AUTHORIZED!!",
					description: "Please Login",
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			});
	};

	//add to cart ends

	useEffect(() => {
		// .get(`https://json-8pz0.onrender.com/all/${id}`)
		setLoading(true);
		dispatch(getDataSingleRequest());
		axios
			.get(`http://localhost:8080/product/${id}`)
			.then((res) => {
				console.log(res.data);
				dispatch(getDataSingleSuccess(res.data));
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				dispatch(getDataSingleFailure(err));
				setLoading(false);
			});
	}, [id]);

	return (
		<>
			{loading && (
				<div className={Styles.loader}>
					<div className={Styles.spinner}></div>
				</div>
			)}
			<Flex
				mt={"150px"}
				mb={"100px"}
				justifyContent={["center", "center", "center", "center"]}
				gap="45px"
				flexDirection={["column", "column", "column", "row"]}
			>
				<Box>
					<Img src={data.Image} className={Styles.image} />
				</Box>
				<Box textAlign={["center", "center", "center", "left"]}>
					<Text fontWeight={"bold"} lineHeight="25px" fontSize={"30px"}>
						{data.Brand}
					</Text>
					<Text
						lineHeight="40px"
						fontWeight={"meduim"}
						color="grey"
						fontSize={"20px"}
					>
						{data.Name}
					</Text>

					<Flex
						mt="5px"
						justifyContent={"center"}
						textAlign="center"
						border="1px solid #d3d3d3"
						w={["45%", "45%", "30%", "25%"]}
						alignContents={"center"}
						m={["auto", "auto", "auto", "0px"]}
					>
						<Box w="30px">
							<b>4.5</b>
						</Box>
						<Box p="5px" w="30px">
							<AiFillStar />
						</Box>
						<Box color="Teal" w="100px">
							<b>3.5K Ratings</b>
						</Box>
					</Flex>

					<hr
						style={{
							marginTop: "10px",
							borderColor: "#d3d3d3",
							height: "1px",
							lineHeight: "22px",
						}}
					/>

					<Flex
						gap={2}
						justifyContent={"center"}
						w={["45%", "45%", "30%", "25%"]}
						alignContents={"center"}
						m={["auto", "auto", "auto", "23px"]}
					>
						<Text as="b" lineHeight="22px" fontSize={"18px"}>
							Rs.{data.Price}{" "}
						</Text>
						<Text
							lineHeight="22px"
							fontSize={"18px"}
							textDecoration="line-through"
							color="grey"
						>
							Rs.{data.OlderPrice}{" "}
						</Text>
						<Text lineHeight="20px" fontSize={"18px"} color="tomato">
							{" "}
							({data.discount}%OFF)
						</Text>
					</Flex>
					<Text
						fontWeight="medium"
						lineHeight="4px"
						color="Teal"
						fontSize="18px"
					>
						inclusive of all taxes
					</Text>

					<Flex
						mt="40px"
						justifyContent={["center", "center", "center", "left"]}
					>
						<Text as="b">SELECT SIZE &nbsp; &nbsp; &nbsp;</Text>
						<Flex>
							<Box>
								<Text color="tomato" as="b">
									SIZE CHART
								</Text>
							</Box>
							<Box mt="5px" ml="8px">
								<IoIosArrowForward />{" "}
							</Box>
						</Flex>
					</Flex>

					{/* Size radio buttons to add to cart */}

					<HStack {...group} mt={3}>
						{options.map((ele) => {
							const radio = getRadioProps({ ele });
							return (
								<SingleProductSizeButtons
									key={ele}
									{...radio}
									onClick={(e) => setSize(e.target.value)}
								>
									{ele}
								</SingleProductSizeButtons>
							);
						})}
					</HStack>

					<Flex
						gap="20px"
						mt="30px"
						justifyContent={"center"}
						flexDirection={["column", "column", "row"]}
					>
						<NavLink>
							<Button
								w="380px"
								size="lg"
								variant="solid"
								colorScheme="pink"
								fontSize={"20px"}
								p="25px"
								leftIcon={<BsBag />}
								onClick={() => AddToCart(data, size, qty)}
							>
								ADD TO BAG
							</Button>
						</NavLink>
						<NavLink>
							<Button
								w="280px"
								size="lg"
								variant="solid"
								colorScheme={"gray"}
								fontSize={"20px"}
								p="25px"
								leftIcon={<CiHeart />}
							>
								WishList{" "}
							</Button>
						</NavLink>
					</Flex>
					<br />
					<hr
						style={{
							marginTop: "10px",
							borderColor: "#d3d3d3",
							height: "1px",
						}}
					/>

					<Flex
						gap="10px"
						mt="20px"
						justifyContent={["center", "center", "left"]}
					>
						<Box fontWeight={"medium"} fontSize="20px">
							BEST OFFERS{" "}
						</Box>
						<Box mt="5px" fontSize={"22px"}>
							<MdOutlineLocalOffer />
						</Box>
					</Flex>

					<Box mt="10px" fontWeight={"medium"} fontSize="18px">
						Best Price: <span style={{ color: "tomato" }}>Rs.149</span>
					</Box>

					<ul mt="10px">
						<li>
							Applicable on: Orders above Rs. 599 (only on first purchase)
						</li>
						<li>Coupon code: MYNTRA200</li>
						<li>Coupon Discount: Rs. 75 off (check cart for final savings)</li>
					</ul>
					<Box mt="15px">
						<Text as="b" color="tomato">
							View Eligible Products
						</Text>
						<Text>
							10% Instant Discount on ICICI Bank Credit and Debit Cards.
						</Text>
						<ul>
							<li>Min Spend Rs 3,500 ; Max Discount Rs 1,200</li>
						</ul>
					</Box>
					<Box mt="15px">
						<Text as="b" color="tomato">
							View Eligible Products
						</Text>
						<Text>10% Instant Discount on Kotak Credit and Debit Cards.</Text>
						<ul>
							<li>Min Spend Rs 3,000 ; Max Discount Rs 1,200</li>
						</ul>
					</Box>
					<Box mt="15px">
						<Text as="b" color="tomato">
							View Eligible Products
						</Text>
						<Text>
							Flat Rs 150 Cashback on Paytm Wallet and Postpaid Transactions.
						</Text>
						<ul>
							<li>Min Spend Rs 1,500</li>
						</ul>
					</Box>
					<Box mt="15px">
						<Text as="b">EMI option available</Text>
						<ul>
							<li>EMI starting from Rs.100/month</li>
						</ul>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default SingleProduct;
