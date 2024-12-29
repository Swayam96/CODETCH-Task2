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
	Spacer,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const CartQuantityButton = ({ qty }) => {
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
				fontSize="14px"
				onClick={onOpen}
			>
				Qty : {qty}
			</Button>
			{/* Modal - Quantity */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent my={"auto"} width={"290px"} px={"5px"}>
					<ModalHeader fontSize="14px" mb={3}>
						Select Quantity
					</ModalHeader>
					<ModalBody>
						<HStack>
							<Button
								variant="outline"
								value={"1"}
								width={"100%"}
								borderRadius={"50%"}
							>
								1
							</Button>
							<Button
								variant="outline"
								value={"2"}
								width={"100%"}
								borderRadius={"50%"}
							>
								2
							</Button>
							<Button
								variant="outline"
								value={"3"}
								width={"100%"}
								borderRadius={"50%"}
							>
								3
							</Button>
							<Button
								variant="outline"
								value={"4"}
								width={"100%"}
								borderRadius={"50%"}
							>
								4
							</Button>
							<Button
								variant="outline"
								value={"5"}
								width={"100%"}
								borderRadius={"50%"}
							>
								5
							</Button>
						</HStack>

						<HStack my={5}>
							<Button
								variant="outline"
								value={"6"}
								width={"100%"}
								borderRadius={"50%"}
							>
								6
							</Button>
							<Button
								variant="outline"
								value={"7"}
								width={"100%"}
								borderRadius={"50%"}
							>
								7
							</Button>
							<Button
								variant="outline"
								value={"8"}
								width={"100%"}
								borderRadius={"50%"}
							>
								8
							</Button>
							<Button
								variant="outline"
								value={"9"}
								width={"100%"}
								borderRadius={"50%"}
							>
								9
							</Button>
							<Button
								variant="outline"
								value={"10"}
								width={"100%"}
								borderRadius={"50%"}
							>
								10
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

export default CartQuantityButton;
