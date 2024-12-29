import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Box,
	Checkbox,
	Text,
	Flex,
	SimpleGrid,
	Stack,
	Link,
	HStack,
	Select,
} from "@chakra-ui/react";
import Styles from "../Css/Makeup.module.css";
import SingleProductCard from "../Pages/SingleProductCard";
import Pagination from "../Components/Pagination";

function getUrl(url, sort, orderBy, filterBy) {
	if (sort && orderBy && filterBy) {
		url = `${url}&order=${orderBy}&orderBy=${sort}&filter=${filterBy}`;
	} else if (sort && orderBy) {
		url = `${url}&order=${orderBy}&orderBy=${sort}`;
	} else if (filterBy) {
		url = `${url}&filter=${filterBy}`;
	}
	return url;
}

const ProductSection = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(4);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(20);

	const [filterBy, setFilterBy] = useState(false);
	const sort = "Price";
	const [orderBy, setOrderBy] = useState("");

	const handleChangePrice = (e) => {
		const setValue = e.target.value;
		setOrderBy(setValue);
	};

	useEffect(() => {
		// https://json-8pz0.onrender.com/all
		let apiUrl = getUrl(
			`http://localhost:8080/product?page=${page}&limit=${limit}`,
			sort,
			orderBy,
			filterBy
		);
		setLoading(true);
		axios
			.get(apiUrl)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [page, orderBy, filterBy, limit]);

	return (
		<Box mt={"90px"}>
			{loading && (
				<div className={Styles.loader}>
					<div className={Styles.spinner}></div>
				</div>
			)}

			<Box borderBottom="1px solid #d3d3d3">
				<Flex className={Styles.sort}>
					<Link to="/"> Home / &nbsp;</Link>
					<Link>Clothing / &nbsp;</Link>
					<Link>
						<Text as="b">Men T-shirts</Text>
					</Link>
				</Flex>
				<Box textAlign={"left"} className={Styles.sort}>
					<Text>Men T-Shirts - 80 items</Text>
				</Box>

				<Flex
					flexDirection={["column", "column", "row"]}
					justifyContent={"space-between"}
				>
					<Box p="10px">
						{" "}
						<Text as="b">Filters</Text>
					</Box>

					<HStack>
						<Select size="sm" placeholder="Bundles"></Select>
						<Select size="sm" placeholder="Country"></Select>
						<Select size="sm" placeholder="Size"></Select>
					</HStack>

					<Box>
						<Select
							placeholder="Sort by : Recommended"
							value={orderBy}
							variant="outline"
							onChange={handleChangePrice}
						>
							<option value="desc">Price : High to Low</option>
							<option value="asc">Price : Low to High</option>
						</Select>
					</Box>
				</Flex>
			</Box>

			<Flex>
				<Box
					textAlign={"left"}
					borderRight="1px solid #d3d3d3"
					w={["40%", "30%", "30%", "15%"]}
					p="0px 10px 15px 15px"
				>
					<Flex mt="10px" pt={"10px"} flexDirection={"column"}>
						<Text as="b">CATEGORIES</Text>
						<Checkbox>Tshirts</Checkbox>
						<Checkbox>Long Tshirts</Checkbox>
					</Flex>

					<Flex
						mt="10px"
						pt={"10px"}
						flexDirection={"column"}
						borderTop="1px solid #d3d3d3"
					>
						<Text as="b">BRAND</Text>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "Roadster")}>
							Roadster
						</Checkbox>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "Puma")}>
							Puma
						</Checkbox>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "WROGN")}>
							WROGN
						</Checkbox>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "Levis")}>
							Levis
						</Checkbox>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "HRX")}>
							HRX
						</Checkbox>
						<Checkbox
							onChange={() => setFilterBy(filterBy ? "" : "Moda Rapido")}
						>
							Moda Rapido
						</Checkbox>
						<Checkbox
							onChange={() => setFilterBy(filterBy ? "" : "Tommy Hilfiger")}
						>
							Tommy Hilfiger
						</Checkbox>
						<Checkbox onChange={() => setFilterBy(filterBy ? "" : "ADIDAS")}>
							ADIDAS
						</Checkbox>
					</Flex>

					<Flex
						mt="10px"
						pt={"10px"}
						flexDirection={"column"}
						borderTop="1px solid #d3d3d3"
					>
						<Text as="b">COLORS</Text>
						<Checkbox>Black</Checkbox>
						<Checkbox>Blue</Checkbox>
						<Checkbox>White</Checkbox>
						<Checkbox>Navy Blue</Checkbox>
						<Checkbox>Green</Checkbox>
						<Checkbox>Red</Checkbox>
						<Checkbox>Grey</Checkbox>
					</Flex>

					<Flex mt="10px" pt={"10px"} flexDirection={"column"}>
						<Text as="b">Discount Range</Text>
						<Checkbox>10% and above</Checkbox>
						<Checkbox>20% and above</Checkbox>
						<Checkbox>30% and above</Checkbox>
						<Checkbox>40% and above</Checkbox>
						<Checkbox>50% and above</Checkbox>
						<Checkbox>60% and above</Checkbox>
						<Checkbox>70% and above</Checkbox>
						<Checkbox>80% and above</Checkbox>
					</Flex>
				</Box>

				<Box className={Styles.box} ml={["20px", "40px", "8px", "50px"]}>
					<SimpleGrid
						className={Styles.grid}
						columns={[1, 2, 3, 5]}
						spacing={8}
					>
						{data?.map((item) => {
							return (
								<Box key={item.id}>
									<Stack className={Styles.Stack}>
										{/* <Link to={`/products/${item.id}`}> */}
										<SingleProductCard
											key={item.id}
											Image={item.Image}
											Brand={item.Brand}
											Name={item.Name}
											Price={item.Price}
											OlderPrice={item.OlderPrice}
											discount={item.discount}
											rating={4.5}
											id={item._id}
										/>
										{/* </Link> */}
									</Stack>
								</Box>
							);
						})}
					</SimpleGrid>
					<Box
						textAlign={"center"}
						width={["100%", "100%", "50%", "50%"]}
						m="auto"
						mt="30px"
					>
						<Pagination
							totalPages={totalPages}
							currentPage={page}
							handlePageChange={(page) => setPage(page)}
						/>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default ProductSection;
