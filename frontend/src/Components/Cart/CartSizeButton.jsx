import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	VStack,
	Divider,
	HStack,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const CartSizeButton = ({ size }) => {
	console.log(size);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<Button
				rightIcon={<FiChevronDown />}
				bg="gray.100"
				borderRadius={"none"}
				variant="outline"
				height={"20px"}
				px={"6px"}
				onClick={onOpen}
				fontSize="14px"
			>
				Size : {size}
			</Button>
			{/* Modal - Size */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent my={"auto"} width={"290px"} px={"5px"}>
					<ModalHeader fontSize="14px" mb={3}>
						Select Size
					</ModalHeader>
					<ModalBody>
						<HStack mb={5}>
							<Button
								variant="outline"
								value={"1"}
								width={"100%"}
								borderRadius={"50%"}
							>
								S
							</Button>
							<Button
								variant="outline"
								value={"2"}
								width={"100%"}
								borderRadius={"50%"}
							>
								M
							</Button>
							<Button
								variant="outline"
								value={"3"}
								width={"100%"}
								borderRadius={"50%"}
							>
								L
							</Button>
							<Button
								variant="outline"
								value={"4"}
								width={"100%"}
								borderRadius={"50%"}
							>
								XL
							</Button>
							<Button
								variant="outline"
								value={"5"}
								width={"100%"}
								borderRadius={"50%"}
							>
								XXL
							</Button>
						</HStack>

						<Button
							variant="solid"
							colorScheme="pink"
							value={"10"}
							width={"90%"}
							margin="auto"
							display={"block"}
							borderRadius="none"
						>
							Done
						</Button>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default CartSizeButton;
