import {
	useDisclosure,
	MenuItem,
	Menu,
	MenuButton,
	MenuList,
	useColorModeValue,
	Flex,
	Box,
	Badge,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";

const NavbarDropDown = ({ name, badge, one, two, three, four, five }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				fontSize="14px"
				color={"black"}
				fontWeight="bold"
				variant="ghost"
				_hover={{
					bg: useColorModeValue("#fff", "#0294c9"),
					borderBottom: "1px solid red",
				}}
				borderRadius="none"
				aria-label="Courses"
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{name}
				{badge ? (
					<Badge
						fontSize="9px"
						mt={"-4"}
						ml={"0"}
						variant="ghost"
						color={"#FF69B4"}
					>
						NEW
					</Badge>
				) : (
					<></>
				)}
			</MenuButton>
			<MenuList
				borderRadius={"none"}
				mt={{ base: "0px", md: "0px", lg: "18px" }}
				p={0}
				m={0}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
				color="black"
			>
				<Flex>
					{/* one */}
					<Box>
						<MenuItem minW={200} _hover={{ bg: "#fff" }}>
							<VStack>
								{one.map((ele) => (
									<VStack>
										<Box>
											<Text fontWeight={"bold"} color={"#de5d82"}>
												{ele.heading}
											</Text>
										</Box>
										<Box pb={"20px"} borderBottom={"1px solid #d3d3d3"}>
											{ele.sub?.map((item) => (
												<Text>{item}</Text>
											))}
										</Box>
									</VStack>
								))}
							</VStack>
						</MenuItem>
					</Box>

					{/* two */}
					<Box>
						<MenuItem bg={"#fbfbfb"} minW={200} _hover={{ bg: "#fff" }}>
							<VStack>
								{two.map((ele) => (
									<VStack>
										<Box>
											<Text fontWeight={"bold"} color={"#de5d82"}>
												{ele.heading}
											</Text>
										</Box>
										<Box pb={"20px"} borderBottom={"1px solid #d3d3d3"}>
											{ele.sub?.map((item) => (
												<Text>{item}</Text>
											))}
										</Box>
									</VStack>
								))}
							</VStack>
						</MenuItem>
					</Box>

					{/* three */}

					<Box>
						<MenuItem minW={200} _hover={{ bg: "#fff" }}>
							<VStack>
								{three.map((ele) => (
									<VStack>
										<Box>
											<Text fontWeight={"bold"} color={"#de5d82"}>
												{ele.heading}
											</Text>
										</Box>
										{ele.sub ? (
											<Box pb={"20px"} borderBottom={"1px solid #d3d3d3"}>
												{ele.sub.map((item) => (
													<Text>{item}</Text>
												))}
											</Box>
										) : (
											<></>
										)}
									</VStack>
								))}
							</VStack>
						</MenuItem>
					</Box>

					{/* four */}

					<Box>
						<MenuItem bg={"#fbfbfb"} minW={200} _hover={{ bg: "#fff" }}>
							<VStack>
								{four.map((ele) => (
									<VStack>
										<Box>
											<Text fontWeight={"bold"} color={"#de5d82"}>
												{ele.heading}
											</Text>
										</Box>
										{ele.sub ? (
											<Box pb={"20px"} borderBottom={"1px solid #d3d3d3"}>
												{ele.sub.map((item) => (
													<Text>{item}</Text>
												))}
											</Box>
										) : (
											<></>
										)}
									</VStack>
								))}
							</VStack>
						</MenuItem>
					</Box>

					{/* five */}
					{/* four */}

					<Box>
						<MenuItem minW={200} _hover={{ bg: "#fff" }}>
							<VStack>
								{five.map((ele) => (
									<VStack>
										<Box>
											<Text fontWeight={"bold"} color={"#de5d82"}>
												{ele.heading}
											</Text>
										</Box>
										{ele.sub ? (
											<Box pb={"20px"} borderBottom={"1px solid #d3d3d3"}>
												{ele.sub.map((item) => (
													<Text>{item}</Text>
												))}
											</Box>
										) : (
											<></>
										)}
									</VStack>
								))}
							</VStack>
						</MenuItem>
					</Box>
				</Flex>
			</MenuList>
		</Menu>
	);
};

export default NavbarDropDown;
