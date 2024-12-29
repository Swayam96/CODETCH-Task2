import React from 'react';
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Checkbox,
  ButtonGroup,
  Radio,
  Image,
  Spacer,
} from '@chakra-ui/react';

const BottomFoo = () => {
  return (
    <Box
      h="auto"
      w="100%"
      // border={'1px solid white'}
      mt={['', '20px', '40px']}
    >
      <Flex flexWrap={'wrap'} align="center" justifyContent={'center'} p="30px">
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"></Image>

        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"></Image>
        <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"></Image>

        <Spacer />
        <Text fontSize={'lg'} fontWeight="900">
          Need Help ? Contact Us
        </Text>
      </Flex>
    </Box>
  );
};

export default BottomFoo;
