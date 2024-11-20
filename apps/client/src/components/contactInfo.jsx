import { Box, Flex, Icon, Text, VStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Box p={6} bg="gray.100" borderRadius="lg" shadow="md">
      <Heading size='lg' color={useColorModeValue('#2D284A', 'gray.800')}>Información de Contacto</Heading>
      <VStack py='5' align="start" spacing={4}>
        <Flex align="center">
          <Icon as={FaEnvelope} boxSize={5} color="teal.500" mr={2} />
          <Text fontSize="md">sprintpits@gmail.com</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaPhone} boxSize={5} color="teal.500" mr={2} />
          <Text fontSize="md">+56 9 8750 4770</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaClock} boxSize={5} color="teal.500" mr={2} />
          <Text fontSize="md">Viernes a Domingo: 08:00-18:00</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaMapMarkerAlt} boxSize={5} color="teal.500" mr={2} />
          <Text fontSize="md">Llaima 5561, Peñalolén, Santiago de Chile</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
