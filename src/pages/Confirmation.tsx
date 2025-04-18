import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box textAlign="center" p={6}>
      <Heading mb={4} color={'cyan.600'}>Registration Successful!</Heading>
      <Text mb={4}>Thank you for registering. We have received your information and will contact you soon.</Text>
      <Button onClick={handleGoHome} color={'white'} bg={"cyan.500"}>Go to Home</Button>
    </Box>
  );
};

export default ConfirmationPage;
