import { Box, Button, HStack, Text, Image, Badge } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartQuantityButton from "./CartQuantityButton";
import CartSizeButton from "./CartSizeButton";

const CartProductCard = ({
	description,
	finalprice,
	strickprice,
	size = "M",
	Qty = "1",
	productImg,
}) => {
	const dispatch = useDispatch();

	return (
		<Box border="1px solid rgb(234, 234, 234)" borderRadius={"5px"} mt={3}>
			<HStack>
				<HStack
					mx={3}
					lineHeight={["1.4rem", "1.6rem"]}
					spacing={"20px"}
					py={3}
				>
					{/* image box */}
					<Box width={["40%", "25%"]}>
						<Image mt={["-1rem", "0rem"]} src={productImg} />
					</Box>
					<Box width={["60%", "80%"]} mx={3} mt={["0.1rem", "-20px"]}>
						<Text
							lineHeight={["1rem", "1rem"]}
							fontSize={["13px", "13px"]}
							fontWeight={"bold"}
						>
							{"Urbano Fashion"}
						</Text>
						<Text lineHeight={["1rem", "1.2rem"]} fontSize={["13px", "12px"]}>
							{description}
						</Text>
						<Text
							lineHeight={["1rem", "1rem"]}
							fontSize={["13px", "12px"]}
							color="gray"
						>
							"Sold by: IMPERIAL ONLINE SERVICES - SJIT"
						</Text>

						{/* Modify size and qty buttons */}
						<HStack spacing={"20px"} mt={1}>
							<CartSizeButton size={size} />

							<CartQuantityButton qty={Qty} />
						</HStack>
						<HStack mt={["1rem", "0.2rem"]}>
							<Text fontSize={"14px"} fontWeight="bold">
								₹ {finalprice}
							</Text>
							<Text fontSize={"14px"} color="gray" as="del">
								₹{strickprice}
							</Text>
						</HStack>
						<HStack mt={["1rem", "-0.3rem"]}>
							<span>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="itemComponents-base-expressIcon"
								>
									<g clip-path="url(#clip0_340_6228)">
										<g clip-path="url(#clip1_340_6228)" fill="#FF3F6C">
											<path d="M7.176 7.372H.412C.165 7.372 0 7.208 0 6.961c0-.247.165-.411.412-.411h6.764c.247 0 .412.164.412.41 0 .248-.165.412-.412.412zM5.939 9.84H3.464c-.247 0-.412-.165-.412-.412 0-.246.165-.411.412-.411H5.94c.247 0 .412.165.412.411 0 .247-.165.411-.412.411z"></path>
											<path d="M14.6 12.471c-.825 0-1.485-.74-2.145-2.22-.577 1.48-1.32 2.22-2.145 2.22-.99 0-1.65-1.069-2.144-2.22-.577 1.48-1.32 2.22-2.145 2.22H1.98c-.248 0-.413-.164-.413-.41 0-.248.165-.412.413-.412H6.02c.495 0 1.073-.822 1.65-2.303l.083-.411c.082-.165.165-.247.412-.247.165 0 .33.082.412.329 0 .082.083.247.083.329v.082c.495 1.398 1.072 2.303 1.567 2.303.495 0 1.155-.822 1.65-2.303 0-.082.082-.246.082-.411.083-.164.248-.329.412-.329.165 0 .33.082.413.247l.165.411c.577 1.563 1.237 2.467 1.732 2.303a.643.643 0 00.33-.33c.247-.493.082-1.48-.33-2.713-.577-1.645-1.815-3.784-2.31-3.784-.247 0-.99.823-1.732 2.55a.454.454 0 01-.412.247.454.454 0 01-.412-.247c-.743-1.727-1.403-2.55-1.65-2.55H2.723c-.248 0-.413-.164-.413-.41 0-.248.165-.412.412-.412h5.526c.66 0 1.403.74 2.145 2.303C10.888 5.069 11.713 4 12.455 4c1.485.082 3.052 4.277 3.052 4.36.412 1.068.742 2.466.33 3.371-.165.33-.495.658-.825.74H14.6z"></path>
										</g>
									</g>
									<defs>
										<clipPath id="clip0_340_6228">
											<path fill="#fff" d="M0 0H16V16H0z"></path>
										</clipPath>
										<clipPath id="clip1_340_6228">
											<path
												fill="#fff"
												transform="translate(-1 4)"
												d="M0 0H17V9H0z"
											></path>
										</clipPath>
									</defs>
								</svg>
							</span>
							<Text fontSize={"11px"} color="gray" pt={"2px"}>
								<HStack spacing={1}>
									<Badge p="0" bg={"none"} fontWeight={"bold"}>
										EXPRESS
									</Badge>{" "}
									<Text>Delivery by </Text>
									<Text p="0" bg={"none"} fontWeight={"bold"}>
										Tomorrow
									</Text>{" "}
								</HStack>
							</Text>
						</HStack>
					</Box>
				</HStack>

				{/* Remove and Move to wishlist buttons */}
				<Box height={"150px"}>
					<Button
						height={"30px"}
						fontSize={"14px"}
						variant="ghost"
						borderRadius={0}
						colorScheme="none"
						display={"block"}
						p={0}
					>
						X
					</Button>
				</Box>
			</HStack>
		</Box>
	);
};

export default CartProductCard;
