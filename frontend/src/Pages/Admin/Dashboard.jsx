import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { BsTagsFill } from "react-icons/bs";
import { FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Input,
	Select,
	Spinner,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const initData = {
	Name: "",
	category: "",
	Image: "",
	Price: "",
	quantity: "",
	Brand: "",
	status: true,
};

const Dashboard = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	// const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = useState("");
	const [activeSort, setActiveSort] = useState("");
	const [formData, setFormData] = useState(initData);
	const toast = useToast();
	const [totalPages, setTotalPages] = useState(4);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(20);

	// const [isError, setIsError] = useState(false);

	//.................... Fetch request.....................//

	const handleAll = () => {
		fetchData();
	};

	const fetchData = () => {
		setLoading(true);
		axios
			.get(`http://localhost:8080/product?page=${page}&limit=${limit}`)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//.................... Quantity Edit request.....................//

	const handleEditQ = (id) => {
		let newQty = prompt("Enter New Quantity");
		if (newQty !== 0 || newQty !== null || newQty > 1) {
			axios
				.patch(`http://localhost:8080/product/${id}`, {
					quantity: +newQty,
				})
				.then((res) => {
					fetchData();
					alert("Inventory Updated");
				})
				.catch((err) => {
					console.log(err);
				});

			toast({
				title: "Inventery is updated.",
				description: "Inventery is updated in to the database.",
				status: "success",
				position: "top",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	const handleReduce = (id, qty) => {
		axios
			.patch(`http://localhost:8080/product/${id}`, {
				quantity: qty - 1,
			})
			.then((res) => {
				fetchData();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleIncrease = (id, qty) => {
		axios
			.patch(`http://localhost:8080/product/${id}`, {
				quantity: qty + 1,
			})
			.then((res) => {
				fetchData();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	//.................... Price Edit request.....................//

	const handlePrice = (id) => {
		let newPricec = prompt("Enter New Price");
		if (newPricec === 0) return;
		axios
			.patch(`http://localhost:8080/product/${id}`, {
				Price: +newPricec,
			})
			.then((res) => {
				fetchData();
				alert("Price Updated");
			})
			.catch((err) => {
				console.log(err);
			});

		toast({
			title: "Price Updated.",
			description: "Price Updated in to the database.",
			status: "success",
			position: "top",
			duration: 9000,
			isClosable: true,
		});
	};

	//.................... Active & Deactive request.....................//

	const handleActive = (id, status) => {
		axios
			.patch(`http://localhost:8080/product/${id}`, {
				status: !status,
			})
			.then((res) => {
				fetchData();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	//.................... Delete request.....................//

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:8080/product/${id}`)
			.then((res) => {
				fetchData();
			})
			.then((err) => {
				console.log(err);
			});

		toast({
			title: "Product Is Deleted.",
			description: "Product Is Deleted from the database.",
			status: "error",
			position: "top",
			duration: 5000,
			isClosable: true,
		});
	};

	useEffect(() => {
		fetchData();
	}, [page, limit]);

	//.................... SortBy Price request.....................//

	const handleSort = (e) => {
		setSort(e.target.value);

		axios
			.get(`http://localhost:8080/product?orderBy=Price&order=${sort}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//.................... SortBy status request.....................//

	const handleActiveSort = (e) => {
		setActiveSort(e.target.value);

		axios
			.get(`http://localhost:8080/product?orderBy=status&order=${activeSort}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//.................... SortBy men Data.....................//

	const handleMensData = () => {
		mensData();
	};

	const mensData = () => {
		setLoading(true);
		axios
			.get("https://data-base-0mrd.onrender.com/menData")
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//.................... SortBy Womens Data.....................//

	const handleWomensData = () => {
		womensData();
	};

	const womensData = () => {
		setLoading(true);
		axios
			.get("https://data-base-0mrd.onrender.com/womenData")
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//....................  Add Product request.....................//

	const handleChange = (e) => {
		const { name, value } = e.target;
		// setIsError(value == '' ? true : false);

		setFormData({ ...formData, [name]: value });
	};

	// const check = (formData) => {
	//   for (let i in formData) {
	//     console.log();
	//     if (formData[i] == '') {
	//       setIsError(true);
	//       break;
	//     }
	//   }
	// };
	const handlePost = () => {
		axios
			.post("http://localhost:8080/product/new", formData)
			.then((res) => {
				fetchData();
			})
			.catch((err) => {
				console.log(err);
			});

		setFormData(initData);

		toast({
			title: "Product Is Added.",
			description: "Product Is Added in to the database.",
			status: "success",
			position: "top",
			duration: 9000,
			isClosable: true,
		});
	};

	return (
		<>
			<Box></Box>
			<div id="main_container">
				<div id="lhs">
					<div id="title_div">
						{/* <div id="logo">
            <img src="../assets/logo.png" alt="" />
          </div> */}
						<h4>Myntra Admin</h4>
					</div>

					<div id="link_div">
						<div id="products_div" className="link_item link_active">
							<BsTagsFill />
							<p>Products</p>
						</div>
						<div id="orders_div" className="link_item">
							<FaRupeeSign />
							<p>Orders</p>
						</div>
						<div id="customers_div" className="link_item">
							<FaUserAlt />
							<p>Customers</p>
						</div>
						<div id="discounts_div" className="link_item">
							<CiDiscount1 />
							<p>Discounts</p>
						</div>
					</div>
				</div>

				<div id="rhs">
					<div id="navbar">
						<Button
							_hover={{ bg: "#f3f4f6" }}
							bg="#f3f4f6"
							color="rgb(134, 130, 238)"
						>
							<Link to="/">Log Out</Link>
						</Button>
					</div>
					<div id="rhs_body">
						<div id="products_page" className="page active">
							<Flex
								mb="30px"
								justifyContent="space-between"
								alignItems="center"
							>
								<h4>Products</h4>
								<Box>
									<Button bg="white" border="1px solid grey" onClick={onOpen}>
										+ Add Product
									</Button>
									<Modal
										isOpen={isOpen}
										onClose={onClose}
										scrollBehavior="inside"
									>
										<ModalOverlay />
										<ModalContent>
											<ModalHeader>Add Product Details</ModalHeader>
											<ModalCloseButton />
											<ModalBody>
												<Flex direction="column" gap="10px" mt="50px">
													<label>
														Product Name <span style={{ color: "red" }}>*</span>
													</label>
													<Input
														type="text"
														placeholder="Add Product Name"
														name="Name"
														value={formData.Name}
														onChange={handleChange}
														required
													/>
													<label>
														URL <span style={{ color: "red" }}>*</span>
													</label>
													<Input
														type="text"
														placeholder="Add Image URL"
														name="Image"
														value={formData.Image}
														onChange={handleChange}
														required
													/>
													<label>
														Product Price{" "}
														<span style={{ color: "red" }}>*</span>
													</label>
													<Input
														type="text"
														placeholder="Add Product Price"
														name="Price"
														value={formData.Price}
														onChange={handleChange}
														required
													/>
													<label>
														Brand Name <span style={{ color: "red" }}>*</span>
													</label>
													<Input
														type="text"
														placeholder="Add Brand Name"
														name="Brand"
														value={formData.Brand}
														onChange={handleChange}
														required
													/>
													<label>
														Quantity <span style={{ color: "red" }}>*</span>
													</label>
													<Input
														type="number"
														placeholder="Add Quantity"
														name="quantity"
														value={formData.quantity}
														onChange={handleChange}
														required
													/>
													<label>
														Description <span style={{ color: "red" }}>*</span>
													</label>
													<Input
														mb="20px"
														type="text"
														placeholder="Add Description"
														name="category"
														value={formData.category}
														onChange={handleChange}
														required
													/>
													<Button
														onClick={handlePost}
														mb="25px"
														color="white"
														bg="black"
														_hover={{ bg: "grey" }}
													>
														Add
													</Button>
												</Flex>
											</ModalBody>
										</ModalContent>
									</Modal>
								</Box>
							</Flex>

							<div className="action_div">
								<div>
									<Button
										onClick={handleAll}
										bg="white"
										border="1px solid grey"
										mr="10px"
									>
										All
									</Button>
									{/* <Button
                    onClick={handleMensData}
                    bg="white"
                    border="1px solid grey"
                    mr="10px"
                  >
                    Mens
                  </Button> */}
									{/* <Button
                    onClick={handleWomensData}
                    bg="white"
                    border="1px solid grey"
                  >
                    Women
                  </Button> */}
								</div>

								<Flex gap="10px">
									<Select onChange={handleActiveSort} placeholder="Filter By">
										<option value="Active">Active</option>
										<option value="Inactive">Inactive</option>
									</Select>

									<Select onChange={handleSort} placeholder="Sort by">
										<option value="desc">Low To High</option>
										<option value="asc">High To Low</option>
									</Select>
								</Flex>
							</div>

							<table>
								<thead>
									<tr>
										<th>Image</th>
										<th>Name</th>
										<th>Inventory</th>
										<th>Price</th>
										<th>Status</th>
										<th>Remove</th>
									</tr>
								</thead>
								<tbody id="product_tbody">
									{/* <!-- items row comes here --> */}
									{data &&
										data.map((ele) => (
											<>
												<tr key={ele._id}>
													<td>
														<img src={ele.Image} alt="" />
													</td>
													<td>
														<span>{ele.Name}</span>
													</td>
													<td>
														{
															<Flex
																fontSize="15px"
																ml="30px"
																gap="7px"
																alignItems="center"
															>
																<Button
																	fontSize="18px"
																	bg={"red.200"}
																	onClick={() =>
																		handleReduce(ele._id, ele.quantity)
																	}
																	_hover={{ cursor: "pointer" }}
																>
																	-
																</Button>
																<Box onClick={() => handleEditQ(ele._id)}>
																	{ele.quantity}
																</Box>
																<Button
																	fontSize="18px"
																	bg={"blue.300"}
																	_hover={{ cursor: "pointer" }}
																	onClick={() =>
																		handleIncrease(ele._id, ele.quantity)
																	}
																>
																	+
																</Button>
															</Flex>
														}
													</td>
													<td>
														{
															<Flex
																onClick={() => handlePrice(ele._id)}
																fontSize="15px"
																_hover={{ cursor: "pointer" }}
																ml="30px"
																gap="7px"
																alignItems="center"
															>
																{ele.Price}
																<EditIcon />
															</Flex>
														}
													</td>
													<td>
														{ele.status ? (
															<Box
																onClick={() =>
																	handleActive(ele._id, ele.status)
																}
																_hover={{ cursor: "pointer" }}
																ml="10px"
																textAlign="center"
																p="1px"
																w="75px"
																bg="rgb(39, 177, 39);"
																borderRadius="30px"
																color="white"
															>
																Active
															</Box>
														) : (
															<Box
																onClick={() =>
																	handleActive(ele._id, ele.status)
																}
																_hover={{ cursor: "pointer" }}
																ml="10px"
																textAlign="center"
																p="1px"
																w="75px"
																bg="rgb(238, 68, 68);"
																borderRadius="30px"
																color="white"
															>
																InActive
															</Box>
														)}
													</td>
													<td>
														<DeleteIcon
															onClick={() => handleDelete(ele._id)}
															w="25px"
															h="25px"
															_hover={{ color: "red", cursor: "pointer" }}
														/>
													</td>
												</tr>
											</>
										))}
								</tbody>
							</table>
							<Box w="100%" mt="50px" textAlign="center">
								{loading && (
									<Spinner
										thickness="4px"
										speed="0.65s"
										emptyColor="gray.200"
										color="blue.500"
										size="xl"
									/>
								)}
							</Box>

							<Flex justifyContent="center" gap="30px" marginTop="30px">
								<Button
									disabled={page === 1}
									colorScheme="teal"
									variant="solid"
									onClick={() => setPage((prev) => prev - 1)}
								>
									Prev
								</Button>
								<Button>{page}</Button>
								<Button
									disabled={page === 100}
									colorScheme="teal"
									variant="solid"
									onClick={() => setPage((prev) => prev + 1)}
								>
									Next
								</Button>
							</Flex>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
