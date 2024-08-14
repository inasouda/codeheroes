import React, { useState } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const FreeLessonForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast(); // Initialize the toast

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://codeheroes-server-66c05a244ff2.herokuapp.com/api/v1/free-lesson', {
        name,
        email,
        phone,
        day,
      });
      toast({
        title: 'Form submitted successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
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
      setIsSubmitting(false);
    }
  };

  return (
    <Center height="100vh" p={4}>
      <Box
        p={4}
        borderWidth={1}
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
        maxW="md"
        width="100%"
        bg="red.50"
      >
        <Heading mb={8} textAlign="center" color="cyan.600" fontSize="2rem">
          Request a Free Lesson
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold" htmlFor="name">Student Name</FormLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" htmlFor="email">Parent's Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" htmlFor="phone">Parent's Phone</FormLabel>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" htmlFor="day">Preferred Lesson Day</FormLabel>
              <RadioGroup id="day" value={day} onChange={(value) => setDay(value)}>
                <Stack direction="column">
                  <Radio value="Friday Aug 30, 5:00PM">Friday Aug 30, 5:00PM</Radio>
                  <Radio value="Saturday Aug 31, 5:00PM">Saturday Aug 31, 5:00PM</Radio>
                  <Radio value="Friday Sep 6, 5:00PM">Friday Sep 6, 5:00PM</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            
            <Box mt={8}>
              <Button
                type="submit"
                color="white"
                bgColor="cyan.500"
                size="lg"
                width="full"
                isLoading={isSubmitting}
                fontSize="1.2rem"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default FreeLessonForm;
