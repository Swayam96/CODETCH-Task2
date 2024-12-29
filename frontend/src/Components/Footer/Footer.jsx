import React from "react";
import styles from "./Footer.module.css";
import {
	Badge,
	Box,
	Flex,
	Image,
	ListItem,
	OrderedList,
	Spacer,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box mt={10} px={"10%"} fontSize={"14px"}>
			{/* first */}
			<Flex h={"400px"}>
				<Box flex="1">
					<Text className={styles.phead1}>ONLINE SHOPPING</Text>
					<Box mt={4} className={styles.normal1}>
						<Text>Men</Text>
						<Text>Women</Text>
						<Text>Kids</Text>
						<Text>Home & Living</Text>
						<Text>Beauty</Text>
						<Text>Gift Cards</Text>
						<Text>
							Myntra Insider
							<Badge
								ml="2"
								colorScheme="red"
								variant="solid"
								px={2}
								borderRadius="20%"
							>
								New
							</Badge>
						</Text>
					</Box>
				</Box>
				<Box flex="1">
					<Text className={styles.phead1}>USEFUL LINKS</Text>
					<Box mt={4} className={styles.normal1}>
						<Text>Contact Us</Text>
						<Text>FAQ</Text>
						<Text>T&C</Text>
						<Text>Terms of Use</Text>
						<Text>Track Orders</Text>
						<Text>Shipping</Text>

						<Text>Cancellation</Text>
						<Text>Return</Text>
						<Text>Whitehat</Text>
						<Text>Blog</Text>
						<Text>Careers</Text>
						<Text>Privacy policy</Text>
						<Text>Site Map</Text>
					</Box>
				</Box>

				<Box flex="1">
					<Text className={styles.phead1}>EXPERIENCE MYNTRA APP ON MOBILE</Text>

					<Stack direction="column" spacing={-300}>
						<Stack direction="row" spacing={-200} pt={3}>
							<Box boxSize="sm">
								<Image
									className={styles.img1}
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F8bGGnMwHHN9MvucVgCQ81obuFspGXbFswYnYoT3CdSaffLFzHrrUPSfz5dhg5KEAw&usqp=CAU"
									alt="PlatStore"
								/>
							</Box>

							<Box boxSize="sm">
								<Image
									className={styles.img1}
									src="https://www.citypng.com/public/uploads/preview/free-available-on-the-app-store-apple-button-png-11639742555i7lifwrl0p.png"
									alt="AppleStore"
								/>
							</Box>
						</Stack>

						<Box>
							<Text className={styles.phead1}>KEEP IN TOUCH</Text>

							<Box boxSize="sm">
								<Image
									className={styles.img2}
									src="https://raw.githubusercontent.com/GreatA-Maker/Myntra/main/images/social.png"
									alt="AppleStore"
								/>
							</Box>
						</Box>
					</Stack>
				</Box>

				<Box flex="1.5" ml={-40} mt={6}>
					<Box className={styles.inner}>
						<Image
							mr={4}
							className="img3"
							src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
						/>
						<Text mt={2}>
							<Badge>100% ORIGINAL guarantee</Badge> for all products at
							myntra.com
						</Text>
					</Box>

					<Box className={styles.inner} mt={5} ml={5}>
						<Image
							mr={6}
							className="img3"
							src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
						/>
						<Text mt={2}>
							<Badge>Return within 30days</Badge> receiving your order
						</Text>
					</Box>
				</Box>
			</Flex>

			<hr style={{ color: "#f3f3f3", margin: "25px 0px" }} />

			{/* Popular search */}

			<Box>
				<Text className={styles.phead1}>POPULAR SEARCHES </Text>
				<Text className={styles.normal1} mt={4}>
					Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
					Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport
					Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings
					| Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
					Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
					Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
					Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles
					| Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes |
					Jewellery | Designers Sarees
				</Text>
				<Stack mt={4} direction={"row"} className={styles.phead1}>
					<Text>
						In case of any concern, <Badge>Contact Us</Badge>
					</Text>
					<Spacer />
					<Text>© 2021 www.myntra.com. All rights reserved.</Text>
				</Stack>
			</Box>

			<hr style={{ color: "#f3f3f3", margin: "25px 0px" }} />

			<Box>
				<Text className={styles.phead1}>
					ONLINE SHOPPING MADE EASY AT MYNTRA{" "}
				</Text>
				<Text className={styles.normal1} mt={4}>
					If you would like to experience the best of online shopping for men,
					women and kids in India, you are at the right place. Myntra is the
					ultimate destination for fashion and lifestyle, being host to a wide
					array of merchandise including clothing, footwear, accessories,
					jewellery, personal care products and more. It is time to redefine
					your style statement with our treasure-trove of trendy items. Our
					online store brings you the latest in designer products straight out
					of fashion houses. You can shop online at Myntra from the comfort of
					your home and get your favourites delivered right to your doorstep.
				</Text>
			</Box>

			<hr style={{ color: "#f3f3f3", margin: "25px 0px" }} />

			<Box>
				<Text className={styles.phead1}>
					BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION{" "}
				</Text>
				<Text className={styles.normal1} my={4}>
					Be it clothing, footwear or accessories, Myntra offers you the ideal
					combination of fashion and functionality for men, women and kids. You
					will realise that the sky is the limit when it comes to the types of
					outfits that you can purchase for different occasions.
				</Text>

				<OrderedList spacing={4} ml={10}>
					<ListItem>
						<span className={styles.smallbold}>Smart men’s clothing -</span> At
						Myntra you will find myriad options in smart formal shirts and
						trousers, cool T-shirts and jeans, or kurta and pyjama combinations
						for men. Wear your attitude with printed T-shirts. Create the
						back-to-campus vibe with varsity T-shirts and distressed jeans. Be
						it gingham, buffalo, or window-pane style, checked shirts are
						unbeatably smart. Team them up with chinos, cuffed jeans or cropped
						trousers for a smart casual look. Opt for a stylish layered look
						with biker jackets. Head out in cloudy weather with courage in
						water-resistant jackets. Browse through our innerwear section to
						find supportive garments which would keep you confident in any
						outfit.
					</ListItem>
					<ListItem>
						<span className={styles.smallbold}>Trendy women’s clothing -</span>{" "}
						Online shopping for women at Myntra is a mood-elevating experience.
						Look hip and stay comfortable with chinos and printed shorts this
						summer. Look hot on your date dressed in a little black dress, or
						opt for red dresses for a sassy vibe. Striped dresses and T-shirts
						represent the classic spirit of nautical fashion. Choose your
						favourites from among Bardot, off-shoulder, shirt-style, blouson,
						embroidered and peplum tops, to name a few. Team them up with
						skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the
						perfect fusion-wear combination for the cool urbanite. Our grand
						sarees and lehenga-choli selections are perfect to make an
						impression at big social events such as weddings. Our salwar-kameez
						sets, kurtas and Patiala suits make comfortable options for regular
						wear.
					</ListItem>
					<ListItem>
						<span className={styles.smallbold}>Fashionable footwear -</span>{" "}
						While clothes maketh the man, the type of footwear you wear reflects
						your personality. We bring you an exhaustive lineup of options in
						casual shoes for men, such as sneakers and loafers. Make a power
						statement at work dressed in brogues and oxfords. Practice for your
						marathon with running shoes for men and women. Choose shoes for
						individual games such as tennis, football, basketball, and the like.
						Or step into the casual style and comfort offered by sandals,
						sliders, and flip-flops. Explore our lineup of fashionable footwear
						for ladies, including pumps, heeled boots, wedge-heels, and
						pencil-heels. Or enjoy the best of comfort and style with
						embellished and metallic flats.
					</ListItem>
					<ListItem>
						<span className={styles.smallbold}>Stylish accessories -</span>{" "}
						Myntra is one of the best online shopping sites for classy
						accessories that perfectly complement your outfits. You can select
						smart analogue or digital watches and match them up with belts and
						ties. Pick up spacious bags, backpacks, and wallets to store your
						essentials in style. Whether you prefer minimal jewellery or grand
						and sparkling pieces, our online jewellery collection offers you
						many impressive options.
					</ListItem>
					<ListItem>
						<span className={styles.smallbold}>Fun and frolic -</span> Online
						shopping for kids at Myntra is a complete joy. Your little princess
						is going to love the wide variety of pretty dresses, ballerina
						shoes, headbands and clips. Delight your son by picking up sports
						shoes, superhero T-shirts, football jerseys and much more from our
						online store. Check out our lineup of toys with which you can create
						memories to cherish.
					</ListItem>
					<ListItem>
						<span className={styles.smallbold}>Beauty begins here -</span>{" "}
						Online shopping for kids at Myntra is a complete joy. Your little
						princess is going to love the wide variety of pretty dresses,
						ballerina shoes, headbands and clips. Delight your son by picking up
						sports shoes, superhero T-shirts, football jerseys and much more
						from our online store. Check out our lineup of toys with which you
						can create memories to cherish.
					</ListItem>
				</OrderedList>

				<Text className={styles.normal1} my={4}>
					Myntra is one of the best online shopping sites in India which could
					help transform your living spaces completely. Add colour and
					personality to your bedrooms with bed linen and curtains. Use smart
					tableware to impress your guest. Wall decor, clocks, photo frames and
					artificial plants are sure to breathe life into any corner of your
					home.
				</Text>
			</Box>

			<Box>
				<Text className={styles.phead1} mt={7}>
					AFFORDABLE FASHION AT YOUR FINGERTIPS{" "}
				</Text>
				<Text className={styles.normal1} my={4}>
					Myntra is one of the unique online shopping sites in India where
					fashion is accessible to all. Check out our new arrivals to view the
					latest designer clothing, footwear and accessories in the market. You
					can get your hands on the trendiest style every season in western
					wear. You can also avail the best of ethnic fashion during all Indian
					festive occasions. You are sure to be impressed with our seasonal
					discounts on footwear, trousers, shirts, backpacks and more. The
					end-of-season sale is the ultimate experience when fashion gets
					unbelievably affordable.
				</Text>
			</Box>

			<Box>
				<Text className={styles.phead1} mt={7}>
					MYNTRA INSIDER{" "}
				</Text>
				<Text className={styles.normal1} my={4}>
					Every online shopping experience is precious. Hence, a cashless
					reward-based customer loyalty program called Myntra Insider was
					introduced to enhance your online experience. The program is
					applicable to every registered customer and measures rewards in the
					form of Insider Points.
				</Text>
				<Text className={styles.normal1} my={4}>
					There are four levels to achieve in the program, as the Insider Points
					accumulate. They are - Insider, Select, Elite or Icon. Apart from
					offering discounts on Myntra and partner platform coupons, each tier
					comes with its own special perks.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} mt={7} mb={4}>
					Insider{" "}
				</Text>

				<UnorderedList spacing={4}>
					<ListItem>
						Opportunity to master any domain in fashion with tips from celebrity
						stylists at Myntra Masterclass sessions.
					</ListItem>
					<ListItem>Curated collections from celeb stylists.</ListItem>
				</UnorderedList>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} mt={7} mb={4}>
					Elite{" "}
				</Text>

				<UnorderedList spacing={4}>
					<ListItem>
						VIP access to special sale events such as the End of Reason Sale
						(EORS) and product launches.
					</ListItem>
					<ListItem>
						Exclusive early access to Limited Edition products
					</ListItem>
				</UnorderedList>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} mt={7} mb={4}>
					Icon{" "}
				</Text>

				<UnorderedList spacing={4}>
					<ListItem>Chance to get on guest lists for special events.</ListItem>
				</UnorderedList>
			</Box>

			<Box>
				<Text className={styles.phead1} mt={7}>
					Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To
					Miss Out On{" "}
				</Text>
				<Text className={styles.normal1} my={4}>
					The world wide web is evolving at a relentless pace, and with an
					accelerated growth each passing year, there is bound to be an
					overwhelming surge of online content. It was for this very reason that
					personalisation of search feeds was proposed as a solution to combat
					the overload of irrelevant information.
				</Text>
				<Text className={styles.normal1} my={4}>
					Several social media platforms such as Facebook and Instagram along
					with various online shopping websites have chosen to help filter
					content, increasing user engagement, retention and customer loyalty.
				</Text>
				<Text className={styles.normal1} my={4}>
					Myntra is one such online shopping website that joins the list of
					platforms that help curate a personalised fashion feed. Named
					theMyntra Studio, this personalised search feed brings you the latest
					men and women’s fashion trends, celebrity styles, branded content and
					daily updates from your favourite fashion labels.
				</Text>
				<Text className={styles.normal1} my={4}>
					If you are wondering how impactful Myntra Studio can be, we are
					listing out five perks of having a rich, meaningful, and personalised
					fashion feed in your life.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} my={4} mt={7}>
					1. BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION{" "}
				</Text>

				<Text className={styles.normal1} my={4}>
					The #OOTD, AKA outfit of the day hashtag trend has been a rage among
					fashion bloggers and stylists. The whole concept of building an outfit
					from scratch and showcasing it to a huge community of enthusiasts
					using the hashtag has helped individuals with understanding trends and
					making suitable for daily wear.
				</Text>
				<Text className={styles.normal1} my={4}>
					Imagine if you could keep up with every piece of clothing and
					accessory worn by the fashion icons you look upto. From Sonam Kapoor
					to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to
					help track celebrity fashion trends, exploring details such as their
					outfit of the day. This way, you would not ever miss out on the latest
					celebrity fashion trends, from all around the world.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} my={4} mt={7}>
					2. Quick Fashion Tip And Tricks{" "}
				</Text>

				<Text className={styles.normal1} my={4}>
					Whether it is draping a saree into a dhoti style, wearing the right
					lingerie under certain dresses or discovering multiple uses out of
					heavy ethnic wear, Myntra Studio will help you acquire some unique and
					useful fashion hacks. Each hack is designed with the intention to help
					you get the best wear out of everything in your wardrobe.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} my={4} mt={7}>
					3. Updates on What Is Trending and New Product Launches{" "}
				</Text>

				<Text className={styles.normal1} my={4}>
					Since fast fashion seems to be extremely hard to keep up with these
					days, a quick update on what is trending in accessories, clothing and
					footwear would certainly be of great help. Myntra Studio helps you
					stay connected to the most beloved and sought after brands such as
					Puma, Coverstory, The Label Life and so many more.
				</Text>
				<Text className={styles.normal1} my={4}>
					Your feed keeps you updated with stories of what the brands are
					creating including clothing, footwear and jewellery, along with their
					new seasonal collections.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} my={4} mt={7}>
					4. Explicit Step-By-Step Beauty Routines From Experts{" "}
				</Text>

				<Text className={styles.normal1} my={4}>
					Just like fashion, the beauty community keeps on growing, and with
					brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina
					Kaif, are constantly coming up with mind-blowing products. Whether it
					is creating a no-makeup look, different winged eyeliners,
					do-it-yourself facial masks and other personal care beauty routines,
					Myntra Studio is here for you.
				</Text>
			</Box>

			<Box ml={7}>
				<Text className={styles.phead1} my={4} mt={7}>
					5. Celebrity Confessions And A Look Into Their Lives{" "}
				</Text>

				<Text className={styles.normal1} my={4}>
					Since fast fashion seems to be extremely hard to keep up with these
					days, a quick update on what is trending in accessories, clothing and
					footwear would certainly be of great help. Myntra Studio helps you
					stay connected to the most beloved and sought after brands such as
					Puma, Coverstory, The Label Life and so many more.
				</Text>
				<Text className={styles.normal1} my={4}>
					Your feed keeps you updated with stories of what the brands are
					creating including clothing, footwear and jewellery, along with their
					new seasonal collections.
				</Text>
			</Box>

			<Box mt={7}>
				<Text className={styles.phead1}>MYNTRA APP </Text>
				<Text className={styles.normal1} mt={4}>
					Myntra, India’s no. 1 online fashion destination justifies its fashion
					relevance by bringing something new and chic to the table on the
					daily. Fashion trends seem to change at lightning speed, yet the
					Myntra shopping app has managed to keep up without any hiccups. In
					addition, Myntra has vowed to serve customers to the best of its
					ability by introducing its first-ever loyalty program, The Myntra
					Insider. Gain access to priority delivery, early sales, lucrative
					deals and other special perks on all your shopping with the Myntra
					app. Download the Myntra app on your Android or IOS device today and
					experience shopping like never before!
				</Text>
			</Box>

			<Box mt={7}>
				<Text className={styles.phead1}>HISTORY OF MYNTRA</Text>
				<Text className={styles.normal1} mt={4}>
					Becoming India’s no. 1 fashion destination is not an easy feat.
					Sincere efforts, digital enhancements and a team of dedicated
					personnel with an equally loyal customer base have made Myntra the
					online platform that it is today. The original B2B venture for
					personalized gifts was conceived in 2007 but transitioned into a
					full-fledged ecommerce giant within a span of just a few years. By
					2012, Myntra had introduced 350 Indian and international brands to its
					platform, and this has only grown in number each passing year. Today
					Myntra sits on top of the online fashion game with an astounding
					social media following, a loyalty program dedicated to its customers,
					and tempting, hard-to-say-no-to deals.
				</Text>
				<Text className={styles.normal1} mt={4}>
					The Myntra shopping app came into existence in the year 2015 to
					further encourage customers’ shopping sprees. Download the app on your
					Android or IOS device this very minute to experience fashion like
					never before
				</Text>
			</Box>

			<Box mt={7} mb={20}>
				<Text className={styles.phead1}>
					SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
				</Text>
				<Text className={styles.normal1} mt={4}>
					Another reason why Myntra is the best of all online stores is the
					complete convenience that it offers. You can view your favourite
					brands with price options for different products in one place. A
					user-friendly interface will guide you through your selection process.
					Comprehensive size charts, product information and high-resolution
					images help you make the best buying decisions. You also have the
					freedom to choose your payment options, be it card or
					cash-on-delivery. The 30-day returns policy gives you more power as a
					buyer. Additionally, the try-and-buy option for select products takes
					customer-friendliness to the next level.
				</Text>
				<Text className={styles.normal1} mt={4}>
					Enjoy the hassle-free experience as you shop comfortably from your
					home or your workplace. You can also shop for your friends, family and
					loved-ones and avail our gift services for special occasions..
				</Text>
			</Box>
		</Box>
	);
}
