import { Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const DividerText = ({ title, subtitle }) => {
  return (
    <Stack spacing={5} textAlign="center" >
        <Heading 
          as="h1" 
          fontSize="4xl" 
          color={useColorModeValue('#2D284A', 'gray.800')}>
          {title}
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          {subtitle}
        </Text>
    </Stack>
  );
};

DividerText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default DividerText;
