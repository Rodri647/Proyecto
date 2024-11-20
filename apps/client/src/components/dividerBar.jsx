import { Stack, Heading, Box, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const DividerBar = ({ title }) => {
  return (
    <Stack spacing={2} align="center">
      <Heading 
        as="h1" 
        fontSize="4xl"
        color={useColorModeValue('#2D284A', 'gray.800')}>
        {title}
      </Heading>
      <Box 
        width="75%" // Ajusta este valor según sea necesario
        height="4px" 
        bg={useColorModeValue('#2D284A', 'gray.800')}
        borderRadius="full"
        mt="4"
        mb="4"
        mx="auto" // Centra el Box horizontalmente
      />
    </Stack>
  );
};

DividerBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default DividerBar;
