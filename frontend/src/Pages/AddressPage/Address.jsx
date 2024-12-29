import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	Checkbox,
	ButtonGroup,
	Radio,
	Image,
	Spacer,
} from "@chakra-ui/react";
import React from "react";
import AddressButton from "./Modal";
import cartimg from "../Myntraasset/cartproimg.jpg";
import BottomFoo from "../../Components/BottomFooter/BottomFoo";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

var data = JSON.parse(localStorage.getItem("address")) || [];

// console.log(data);

const Address = () => {
	return (
		<Box w={"100%"}>
			<Box mt="100px">
				<Flex
					gap={10}
					mt="20px"
					p="30px"
					flexDirection={["column", "column", "row"]}
				>
					<Box h="730px" w="45%" mb="10px">
						<Flex justifyContent={"space-between"}>
							<Text
								fontSize={["13px", "lg", "xl"]}
								fontWeight={[200, 300, 600]}
								mr={["60px", "", ""]}
							>
								Selet Delivery Address
							</Text>
							<AddressButton />
						</Flex>

						<Text color={"grey.200"} mt="20px" fontSize={["16px", "xl", "2xl"]}>
							DEFAULT ADDRESS
						</Text>

						<Box
							h={["auto", "400px", " "]}
							w={["320px", "400px", "90%"]}
							//   border={'1px solid '}
							borderRadius={"20px"}
							mt="20px"
							boxShadow={"md"}
							// border="2px solid grey"
						>
							<Box>
								<Flex gap={10} mb="10px" ml="50px">
									<Radio
										checked
										colorScheme="pink"
										size="lg"
										fontSize={["10px", "20px", "xl"]}
									>
										Swayam Prajapati
									</Radio>
									<Button
										border={"1px solid green"}
										color="green"
										ml="20px"
										bg="white"
										p="0 20px"
										borderRadius={"50px"}
										mt="5px"
									>
										Home
									</Button>
								</Flex>

								<Text
									mb="10px"
									ml="50px"
									color={"grey"}
									fontSize={["15px", "25px", "xl"]}
								>
									Nalasopara Tal-vasai dist-palghar state-Mahashatra <br /> 40325
								</Text>
								<Text ml="50px" color={"grey"} fontSize="xl">
									mobile: <span fontWeight="800">123456788</span>
								</Text>
								<li
									style={{
										margin: "20px",
										marginLeft: "50px",
										fontSize: "20px",
										color: "grey",
									}}
								>
									Pay on Delivery available
								</li>
							</Box>

							<ButtonGroup gap="4" ml="50px">
								<Button bg="white" border={"1px solid"}>
									REMOVE
								</Button>
								<Button border={"1px solid"} bg="white">
									EDIT
								</Button>
							</ButtonGroup>
						</Box>

						<Text
							color={"grey.200"}
							mt="20px"
							fontSize={["15px", "30px", "xl"]}
						>
							OTHERS ADDRESS
						</Text>

						{data.map((ele, ind) => {
							return (
								<Box
									key={ele.ind}
									// h="220px"
									// w="90%"
									//   border={'1px solid '}
									borderRadius={"20px"}
									mt="20px"
									boxShadow={"xl"}
									border="1px solid white"
									h={["auto", "400px", " 220px"]}
									w={["320px", "400px", "90%"]}
									// mb={['', '', '50px']}
								>
									<Box>
										<Flex gap={10} mb="20px" ml="50px">
											<Radio colorScheme="pink" size="lg" fontSize={"xl"}>
												{ele.name}
											</Radio>
											<Button
												border={"1px solid green"}
												color="green"
												ml="20px"
												bg="white"
												p="0 20px"
												borderRadius={"50px"}
												mt="5px"
											>
												Work
											</Button>
										</Flex>

										<Text mb="20px" ml="50px" color={"grey"} fontSize="xl">
											Address:- {ele.address}
										</Text>
										<Text ml="50px" color={"grey"} fontSize="xl">
											Mobile:- <span fontWeight="800">{ele.moblie}</span>
										</Text>
										<Text ml="50px" color={"grey"} fontSize="xl">
											Pincode:- <span fontWeight="800">{ele.pincode}</span>
										</Text>
										<Text mb="20px" ml="50px" color={"grey"} fontSize="xl">
											Locality:- {ele.locality}
										</Text>
									</Box>
								</Box>
							);
						})}
					</Box>
					<Box
						h={["auto", "auto", "500px"]}
						w={["300px", "300px", "35%"]}
						ml="30px"
					>
						<Text ml="10px" fontSize={"lg"} mb="20px">
							DELIVERY ESTIMATES
						</Text>
						<Box>
							<Flex gap={["5px", "7px", "20px"]}>
								<Image
									src={cartimg}
									alt="product_img"
									w="50px"
									ml="20px"
									mb="22px"
								></Image>
								<Text fontSize={"lg"}>Estimate delivery by</Text>{" "}
								<span style={{ fontSize: "20px", fontWeight: "600" }}>
									26 Dec 2022
								</span>
							</Flex>

							<Text fontSize={"md"} fontWeight="800" mb="10px">
								PRICE DETAILS (1 Item)
							</Text>

							<Box>
								<Flex justifyContent={"space-between"} mt="2px" p="30px">
									<Text fontSize={"lg"} fontWeight="700">
										Total MRP
									</Text>
									<Text fontSize={"lg"} fontWeight="700">
										1299
									</Text>
								</Flex>

								<Flex justifyContent={"space-between"} mt="2px" p="30px">
									<Text fontSize={"lg"} fontWeight="700">
										Convenience Fee{" "}
									</Text>
									<Text fontSize={"lg"} fontWeight="700">
										<strike style={{ color: "grey" }}>49</strike>{" "}
										<span style={{ color: "grey" }}>FREE</span>
									</Text>
								</Flex>

								<hr></hr>

								<Flex justifyContent={"space-between"} mt="2px" p="30px">
									<Text fontSize={"xl"} fontWeight="700">
										Total Amount
									</Text>
									<Text fontSize={"lg"} fontWeight="700">
										599
									</Text>
								</Flex>

								<Link to={"/orderCompleted"}>
									<Button
										w="100%"
										border={"1px solid white"}
										bg="pink.400"
										P="100px"
									>
										CONTINUE
									</Button>
								</Link>
							</Box>
						</Box>
					</Box>
				</Flex>
			</Box>

			<BottomFoo />
		</Box>
	);
};

export default Address;
