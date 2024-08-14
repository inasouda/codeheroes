
// src/pages/NotFound.tsx
import React from 'react';
import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Center height="100vh" p={4}>
      <Box
        p={6}
        borderWidth={1}
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        maxW="lg"
        bg="white"
      >
        <Heading mb={4} color="red.500">
          404 - Page Not Found
        </Heading>
        <Text mb={6}>The page you are looking for does not exist.</Text>
        <Button
          bgColor="cyan.500"
          color={'white'}
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </Box>
    </Center>
  );
};

export default NotFound;
