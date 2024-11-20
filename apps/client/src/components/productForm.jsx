import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: null,
    stock: "",
    caracteristicas: [{ clave: "", valor: "" }], // Inicializa con una característica vacía
  });
  const toast = useToast(); // Para mostrar notificaciones

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el cambio en las características
  const handleCaracteristicaChange = (index, e) => {
    const { name, value } = e.target;
    const newCaracteristicas = [...formData.caracteristicas];
    newCaracteristicas[index][name] = value;
    setFormData({ ...formData, caracteristicas: newCaracteristicas });
  };

  // Agregar una nueva característica
  const addCaracteristica = () => {
    setFormData({
      ...formData,
      caracteristicas: [...formData.caracteristicas, { clave: "", valor: "" }],
    });
  };

  // Eliminar una característica
  const removeCaracteristica = (index) => {
    const newCaracteristicas = formData.caracteristicas.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, caracteristicas: newCaracteristicas });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear FormData para manejar el envío de archivos
    const productData = new FormData();
    productData.append("nombre", formData.nombre);
    productData.append("precio", formData.precio);
    productData.append("descripcion", formData.descripcion);
    productData.append("stock", formData.stock);
    productData.append("imagen", formData.imagen); // La imagen seleccionada

    // Añadir las características al FormData como un JSON string
    productData.append(
      "caracteristicas",
      JSON.stringify(formData.caracteristicas)
    );

    try {
      // Hacer el envío al backend usando axios
      const response = await axios.post("http://localhost:3000/server/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Mostrar mensaje de éxito
      toast({
        title: "Producto guardado",
        description: "El producto se ha guardado exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      console.log(response.data); // Ver la respuesta del servidor
    } catch (error) {
      console.error(error);
      // Mostrar mensaje de error
      toast({
        title: "Error al guardar producto",
        description: "Hubo un problema al guardar el producto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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

          <FormControl id="imagen" isRequired>
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
                <FormLabel>Característica</FormLabel>
                <Input
                  name="clave"
                  value={caracteristica.clave}
                  onChange={(e) => handleCaracteristicaChange(index, e)}
                  placeholder="Título de la característica"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Descripción</FormLabel>
                <Input
                  name="valor"
                  value={caracteristica.valor}
                  onChange={(e) => handleCaracteristicaChange(index, e)}
                  placeholder="Descripción de la característica"
                />
              </FormControl>
              <Button
                colorScheme="red"
                onClick={() => removeCaracteristica(index)}
              >
                Eliminar
              </Button>
            </Stack>
          ))}

          <Button onClick={addCaracteristica} colorScheme="teal">
            Agregar Característica
          </Button>

          <Button type="submit" colorScheme="blue">
            Guardar Producto
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ProductForm;
