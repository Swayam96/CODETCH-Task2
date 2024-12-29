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
	Divider,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";

const Coupon = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleCouponCode = () => {
		onClose();
	};
	return (
		<>
			<Button
				px={2.5}
				fontSize={"13px"}
				colorScheme={"pink"}
				variant={"outline"}
				borderRadius="none"
				size="sm"
				onClick={onOpen}
			>
				Apply
			</Button>
			{/* Modal - Coupon */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent my={"auto"}>
					<ModalHeader textAlign={"center"} fontSize="16px">
						Have a Coupon / Gift Card?
						<Divider
							borderWidth={1}
							borderColor="#d91099"
							w="100px"
							m={"10px auto"}
						/>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl variant="floating">
							<FormLabel fontSize={"1rem"} fontWeight={"bold"} color="gray.400">
								ENTER CODE
							</FormLabel>
							<Input placeholder=" " size="lg" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme={"pink"}
							variant={"outline"}
							borderRadius="none"
							mr={3}
							onClick={handleCouponCode}
							w={"50%"}
							m={"auto"}
						>
							APPLY
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Coupon;
