import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Css/Makeup.module.css";

const SingleProductCard = ({
	id,
	Image,
	Brand,
	Name,
	Price,
	OlderPrice,
	discount,
}) => {
	return (
		<Box textAlign={"left"}>
			<Link to={`/products/${id}`}>
				<Img src={Image} className={Styles.grow} />
			</Link>
			<Text fontWeight={"bold"} lineHeight="22px" mt="5px" fontSize={"16px"}>
				{Brand}
			</Text>
			<Text lineHeight="22px" fontSize={"15px"} color="grey">
				{Name}
			</Text>
			<Flex gap={2} justifyContent="left">
				<Text as="b" lineHeight="22px" fontSize={"15px"}>
					Rs.{Price}{" "}
				</Text>
				<Text
					lineHeight="22px"
					fontSize={"15px"}
					textDecoration="line-through"
					color="grey"
				>
					Rs.{OlderPrice}{" "}
				</Text>
				<Text lineHeight="22px" fontSize={"12px"} color="tomato">
					{" "}
					({discount}%OFF)
				</Text>
			</Flex>
		</Box>
	);
};

export default SingleProductCard;
