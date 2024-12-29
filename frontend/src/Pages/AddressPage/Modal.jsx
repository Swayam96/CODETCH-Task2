import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

export default function AddressButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [moblie, setMoblie] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');

  var AddressData = [];

  const handalAdd = () => {
    const payload = {
      name,
      moblie,
      pincode,
      address,
      locality,
    };

    AddressData.push(payload);

    localStorage.setItem('address', JSON.stringify(AddressData));
    window.location.reload();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        p={['10px 72px', '10px 50px ', '10px 30px']}
        borderRadius={'10px '}
        border="1px solid black"
        bg="white"
        fontSize={['15px', 'md', null]}
      >
        Add new Address
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD NEW ADDRESS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>CONTACT DETAILS</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                mb="40px"
                p="25px 10px"
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Moblie No"
                p="25px 20px"
                mb="20px"
                onChange={(e) => setMoblie(e.target.value)}
              />

              <FormLabel>ADDRESS</FormLabel>
              <Input
                type="text"
                placeholder="Pin Code "
                mb="20px"
                p="25px 10px"
                onChange={(e) => setPincode(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Address (House No,Building , Street,Area)"
                p="25px 20px"
                mb="20px"
                onChange={(e) => setAddress(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Locality/Town"
                p="25px 20px"
                onChange={(e) => setLocality(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              p="26px"
              w="100%"
              bg="pink.500"
              onClick={handalAdd}
            >
              Add ADDRESS
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
