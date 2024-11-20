import React from 'react';
import { Box, Flex, Text, Link, Stack, chakra, Icon } from '@chakra-ui/react';

const Feature = (props) => {
  return (
    <Flex align="center">
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color="brand.500"
          _dark={{ color: "brand.300" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.span
          mt={2}
          color="gray.700"
          _dark={{ color: "gray.400" }}
        >
          {props.children}
        </chakra.span>
      </Box>
    </Flex>
  );
};

const PricingCard = ({ title, price, features, onScheduleClick }) => {
  return (
    <Box
      rounded={["none", "lg"]}
      shadow={["none", "md"]}
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      <Flex
        direction="column"
        justify="space-between"
        p="6"
        borderBottomWidth="1px"
        color="gray.200"
        _dark={{ color: "gray.600" }}
      >
        <chakra.p
          mb={1}
          fontSize="lg"
          fontWeight="semibold"
          color="gray.700"
          _dark={{ color: "gray.400" }}
        >
          {title}
        </chakra.p>
        <Text
          mb={2}
          fontSize="5xl"
          fontWeight={["bold", "extrabold"]}
          color="gray.900"
          _dark={{ color: "gray.50" }}
          lineHeight="tight"
        >
          ${price.toLocaleString()}
        </Text>
        <Link
          w={["full", , "auto"]}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={5}
          py={3}
          border="solid transparent"
          fontWeight="bold"
          rounded="md"
          shadow="md"
          _light={{ color: "gray.800" }}
          bg="gray.50"
          _dark={{ bg: "gray.600" }}
          _hover={{
            bg: "gray.100",
            _dark: { bg: "gray.700" },
          }}
          onClick={onScheduleClick}
        >
          Agendar
        </Link>
      </Flex>
      <Stack direction="column" p="6" spacing="3" flexGrow="1">
        {features.map((feature, index) => (
          <Feature key={index}>{feature}</Feature>
        ))}
      </Stack>
    </Box>
  );
};

export default PricingCard;
