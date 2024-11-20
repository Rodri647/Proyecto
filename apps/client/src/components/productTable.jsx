import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  Box
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener productos desde la base de datos
    axios.get('/server/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Llamar a la API para eliminar el producto
    axios.delete(`/server/products/${id}`)
      .then(() => {
        // Actualizar el estado después de la eliminación
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleEdit = (id) => {
    // Redirigir al formulario de edición
    navigate(`/admin/editproduct/${id}`);
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Nombre</Th>
            <Th>Precio</Th>
            <Th>Stock</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product._id}>
              <Td>
                <Image
                  src={`http://localhost:3000/uploads/${product.imagen}`}
                  alt={product.nombre}
                  boxSize="100px"
                  objectFit="cover"
                />
              </Td>
              <Td>{product.nombre}</Td>
              <Td>${product.precio}</Td>
              <Td>{product.stock}</Td>
              <Td>
                <Button colorScheme="blue" onClick={() => handleEdit(product._id)}>Editar</Button>
                <Button colorScheme="red" ml={2} onClick={() => handleDelete(product._id)}>Eliminar</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductTable;
