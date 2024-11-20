import React from 'react';
import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import ProductTable from '../components/productTable'; // Asegúrate de importar la tabla de productos
import ProductForm from '../components/productForm';  // Asegúrate de importar el formulario de productos
import { MdInventory } from 'react-icons/md';
import { useContext, useEffect, useState } from "react";
import Logo from "../assets/SprintPits_Letra.png";


export default function Dashboard() {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedNav, setSelectedNav] = useState('');
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.400",
        }}
        _hover={{
          bg: "gray.100",
          _dark: {
            bg: "gray.900",
          },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        onClick={() => setSelectedNav(children)}
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="5"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="55"
      {...props}
    >
      <Flex direction="column" h="full" align="center">
        <Box py="10" />
        <Box px="4" py="5">
          <Avatar boxSize="100px" src={Logo} />
        </Box>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
          flex="1"
        >
          <NavItem icon={MdInventory}>Inventario</NavItem>
        </Flex>
        <Box px="4" py="5" align="center">
            <Button colorScheme="teal" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Ver productos' : 'Agregar producto'}
            </Button>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box as="section" bg="gray.50" minH="100vh">
            <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          <Box mt={4}>
            {showForm ? <ProductForm /> : <ProductTable />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};