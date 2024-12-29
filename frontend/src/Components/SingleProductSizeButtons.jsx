import React from "react";
import { Box, useRadio } from "@chakra-ui/react";

const SingleProductSizeButtons = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();
	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderWidth="1px"
				minW="50px"
				textAlign={"center"}
				p={3}
				h="50px"
				borderRadius={"50px"}
				_checked={{
					bg: "white",
					color: "pink.600",
					borderColor: "pink.600",
				}}
				_focus={{
					boxShadow: "outline",
				}}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default SingleProductSizeButtons;
