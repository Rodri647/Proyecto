import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

export default function CartModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#2D284A" color="#BEBDC0">
        <ModalHeader>Producto añadido al carrito</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="#BEBDC0">El producto se ha añadido al carrito correctamente.</Text>
        </ModalBody>
        <ModalFooter>
          <Button bg="#BEBDC0" color="#2D284A" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
