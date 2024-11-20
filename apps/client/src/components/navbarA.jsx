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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import logoImage from '../assets/SprintPits_Logo.jpg';
import letraImage from '../assets/SprintPits_Letra.png';

export default function NavBarA() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('#2D284A', '#BEBDC0')}
        px={4}
        position="fixed"
        width="100%"
        top={0}
        zIndex="10000"
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
            <Link to="/admin/dashboard">
              <Avatar boxSize="60px" src={logoImage} />
            </Link>
            <Link to="/admin/dashboard">
              <Image src={letraImage} alt="Logo" width="160px" height="auto" objectFit="contain" />
            </Link>
          </HStack>
        </Flex>
      </Box>
      <Box height="16" />
    </>
  );
}

NavBarA.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};