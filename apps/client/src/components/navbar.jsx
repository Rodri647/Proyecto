import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DrawerShop from './drawer';
import logoImage from '../assets/SprintPits_Logo.jpg';
import letraImage from '../assets/SprintPits_Letra.png';

const Links = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Productos', path: '/products' },
  { name: 'Contacto', path: '/contact' },
];

const NavLink = ({ children, to }) => {
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('#585174', '#585174'),
      }}
      fontFamily="'arial', sans-serif"
      fontWeight="bold"
      color={useColorModeValue('#BEBDC0', '#BEBDC0')}
      to={to}>
      {children}
    </Box>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('#2D284A', '#BEBDC0')}
        px={4}
        position="fixed"
        width="100%"
        top={0}
        zIndex={10}
        boxShadow="md">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Link to="/">
              <Avatar boxSize="60px" src={logoImage} />
            </Link>
            <Link to="/">
              <Image src={letraImage} alt="Logo" width="160px" height="auto" objectFit="contain" />
            </Link>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <DrawerShop />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack py={4} as={'nav'} spacing={3}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box height="16" />
    </>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
