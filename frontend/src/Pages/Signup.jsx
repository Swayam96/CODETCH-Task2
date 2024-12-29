import React from "react";
import {
	Box,
	Button,
	FormControl,
	Heading,
	Input,
	Link,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { signup } from "../Redux/Auth/action";
import { useDispatch } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signupHandle = (e) => {
		e.preventDefault();

		if (email && password) {
			signup(dispatch, email, password, navigate);
			setEmail("");
			setPassword("");
		}
	};

	return (
		<Box
			mt={"80px"}
			w="100%"
			h="100vh"
			bgGradient="linear(to-tl,yellow.50 0%, orange.50 25%, red.50 50%)"
		>
			<VStack p={8}>
				<Box w={400} minHeight="100%" bg="#FFFFFF">
					<Box>
						<img
							src="https://assets.myntassets.com/dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2022/12/9/74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-_-MYNTRA500.jpg"
							alt=""
						/>
					</Box>
					<VStack p={8} spacing={6}>
						<Heading
							fontSize="20px"
							color="#424553"
							fontWeight={600}
							letterSpacing={1}
						>
							Signup
						</Heading>

						<FormControl>
							<form onSubmit={signupHandle}>
								<Stack spacing={6}>
									<Input
										type="email"
										placeholder="Email"
										borderRadius={false}
										height={12}
										required={true}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>

									<Input
										type="password"
										placeholder="Password"
										borderRadius={false}
										height={12}
										required={true}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>

									<Text
										fontSize="sm"
										color="#424553"
										letterSpacing={1}
										textAlign="left"
									>
										By continuing, I agree to the{" "}
										<Link fontWeight={600} color="#ff3c6f">
											Terms of use
										</Link>{" "}
										&{" "}
										<Link fontWeight={600} color="#ff3c6f">
											Privacy Policy
										</Link>
									</Text>
									<Button
										bg="#ff3c6f"
										borderRadius={false}
										color="#ffffff"
										_hover={false}
										type="submit"
									>
										SIGNUP
									</Button>
									<Text
										fontSize="sm"
										color="#424553"
										letterSpacing={1}
										textAlign="left"
									>
										Already have an account{" "}
										<Link
											as={ReactLink}
											fontWeight={600}
											color="#ff3c6f"
											to="/login"
										>
											Login
										</Link>
									</Text>
								</Stack>
							</form>
						</FormControl>
					</VStack>
				</Box>
			</VStack>
		</Box>
	);
};

export default Signup;
