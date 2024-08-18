import React, { useState } from 'react';
import { Box, Center, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CHButton from '../components/CHButton';


const FreeLessonForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [day, setDay] = useState<string>('');
  // const [ setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const toast = useToast(); // Initialize the toast

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);

    try {
      await axios.post('https://codeheroes-server-66c05a244ff2.herokuapp.com/api/v1/free-lesson', {
        name,
        email,
        phone,
        day,
      });
      navigate('/confirmation');
      // toast({
      //   title: 'Form submitted successfully!',
      //   status: 'success',
      //   duration: 5000,
      //   isClosable: true,
      // });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'There was an error submitting the form.',
        description: 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      // setIsSubmitting(false);
    }
  };

  return (
    <Center minHeight="100vh" bg="cyan.500" p={4}>
      <Box
        p={8}
        borderWidth={1}
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="lg"
        maxW="lg"
        width="100%"
        bg="white"
      >
        <Heading mb={8} textAlign="left" color="cyan.600" fontSize="2xl">
          Request a Free Lesson
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="name" fontSize="lg" fontWeight="medium" color="gray.600">Student Name</FormLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                borderRadius="md"
                borderColor="gray.300"
                _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="lg" fontWeight="medium" color="gray.600">Parent's Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                borderRadius="md"
                borderColor="gray.300"
                _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="phone" fontSize="lg" fontWeight="medium" color="gray.600">Parent's Phone</FormLabel>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                borderRadius="md"
                borderColor="gray.300"
                _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="day" fontSize="lg" fontWeight="medium" color="gray.600">Preferred Lesson Day</FormLabel>
              <RadioGroup id="day" value={day} onChange={(value) => setDay(value)}>
                <Stack direction="column">
                  <Radio value="Friday Aug 30, 5:00PM">Friday Aug 30, 5:00PM</Radio>
                  <Radio value="Saturday Aug 31, 5:00PM">Saturday Aug 31, 5:00PM</Radio>
                  <Radio value="Friday Sep 6, 5:00PM">Friday Sep 6, 5:00PM</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            
            <Box 
              mt={8} 
              display={'flex'} 
              gap='1rem' 
              justifyContent='center'>
                <CHButton 
                  text = 'Submit'  
                  colorScheme = 'cyan'
                  type = 'submit' 
                  color = 'white'
                  size = 'lg'
                ></CHButton>
                <CHButton text={'Clear'}  
                  colorScheme={'yellow'} 
                  type="reset" 
                  color={'white'} 
                  size="lg">
                </CHButton>

            
            </Box>
            
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default FreeLessonForm;
