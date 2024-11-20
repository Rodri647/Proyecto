import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductForm = () => {
  const { id } = useParams(); // Obtener el ID del producto desde los parámetros de la URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: null,
    stock: '',
    caracteristicas: [{ clave: '', valor: '' }], // Inicializa con una característica vacía
  });

  useEffect(() => {
    // Obtener el producto desde la base de datos usando el ID
    axios.get(`/server/products/${id}`)
      .then((response) => {
        const productData = response.data;
  
        // Asegurarse de que el campo "caracteristicas" siempre sea un array
        productData.caracteristicas = Array.isArray(productData.caracteristicas)
          ? productData.caracteristicas
          : [{ clave: '', valor: '' }];
        
        setFormData(productData);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaracteristicaChange = (index, e) => {
    const { name, value } = e.target;
    const newCaracteristicas = [...formData.caracteristicas];
    newCaracteristicas[index][name] = value;
    setFormData({ ...formData, caracteristicas: newCaracteristicas });
  };

  const addCaracteristica = () => {
    setFormData({
      ...formData,
      caracteristicas: [...formData.caracteristicas, { clave: '', valor: '' }],
    });
  };

  const removeCaracteristica = (index) => {
    const newCaracteristicas = formData.caracteristicas.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, caracteristicas: newCaracteristicas });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí procesas el envío de datos para la actualización
    axios.put(`/server/products/${id}`, formData)
      .then(() => {
        // Redirigir a la página del listado de productos después de la actualización
        navigate('/admin/products');
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box maxW="600px" mx="auto" p={6} boxShadow="md" rounded="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="nombre" isRequired>
            <FormLabel>Nombre del Producto</FormLabel>
            <Input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="precio" isRequired>
            <FormLabel>Precio</FormLabel>
            <Input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="descripcion" isRequired>
            <FormLabel>Descripción</FormLabel>
            <Textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="imagen">
            <FormLabel>Imagen del Producto</FormLabel>
            <Input
              type="file"
              name="imagen"
              onChange={(e) =>
                setFormData({ ...formData, imagen: e.target.files[0] })
              }
            />
          </FormControl>

          <FormControl id="stock" isRequired>
            <FormLabel>Stock</FormLabel>
            <Input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </FormControl>

          {/* Sección de Características */}
          {formData.caracteristicas.map((caracteristica, index) => (
            <Stack key={index} direction="row" align="center">
              <FormControl>
                <FormLabel>Clave</FormLabel>
                <Input
                  name="clave"
                  value={caracteristica.clave}
                  onChange={(e) => handleCaracteristicaChange(index, e)}
                  placeholder="Clave de la característica"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Valor</FormLabel>
                <Input
                  name="valor"
                  value={caracteristica.valor}
                  onChange={(e) => handleCaracteristicaChange(index, e)}
                  placeholder="Valor de la característica"
                />
              </FormControl>
              <Button colorScheme="red" onClick={() => removeCaracteristica(index)}>
                Eliminar
              </Button>
            </Stack>
          ))}

          <Button onClick={addCaracteristica} colorScheme="teal">
            Agregar Característica
          </Button>

          <Button type="submit" colorScheme="blue">
            Actualizar Producto
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditProductForm;
