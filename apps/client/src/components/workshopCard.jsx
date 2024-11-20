// WorkshopCard.js
import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';



const WorkshopCard = () => {
  const workshop = {
    title: 'Taller de Ciclismo Urbano',
    details: [
      'Modificación ley de convivencia de modos',
      'Tipos de bicicletas',
      'Averías comunes y cómo solucionarlas',
      'Accesorios y herramientas indispensables',
      'Tips',
      'Resuelve dudas como: ¿Qué tipo de bicicleta necesito? ¿Cada cuanto es necesario hacerle un mantenimiento? ¿Qué es un estudio biomecánica y cómo puede evitar o agravar lesiones?'
    ]
  };

  return (
    <Box borderWidth={1} borderRadius="md" p={4} shadow="md">
      <Heading as="h3" size="md" mb={4}>{workshop.title}</Heading>
      <List spacing={2}>
        {workshop.details.map((detail, index) => (
          <ListItem key={index}>{detail}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WorkshopCard;