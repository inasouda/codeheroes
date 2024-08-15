import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  useToast,
  SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  dob: string;
  codingExperience: string;
  grade: string;
  photoConsent: string;
  lessonDay: string;
  comments: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dob: '',
    codingExperience: '',
    grade: '',
    photoConsent: '',
    lessonDay: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCodingExperienceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, codingExperience: value }));
  };

  const handlePhotoConsentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, photoConsent: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await axios.post('https://codeheroes-server-66c05a244ff2.herokuapp.com/api/v1/students', formData);
      navigate('/');
      // Handle the response from the server
      toast({
        title: 'Registration successful.',
        description: response.data.message || 'Your registration has been successfully submitted.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
  
      // Optionally, you can reset the form or navigate to another page here
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        dob: '',
        codingExperience: '',
        grade: '',
        photoConsent: '',
        lessonDay: '',
        comments: '',
      });
  
    } catch (error: any) {
      // Handle errors
      toast({
        title: 'Registration failed.',
        description: error.response?.data.message || error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      maxW={'100vw'}
      mx="auto"
      p={6}
      bg="cyan.500"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={8} textAlign="center" color="white" fontSize="2xl" >
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          {/* Left Column: Personal Information */}
        
            <Box
              bg="white"
              borderWidth={1}
              borderRadius="md"
              boxShadow="md"
              p={4}
              // mb={{ base: 4, lg: 0 }}
            >
              <Heading size="md" mb={4}>Personal Information</Heading>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Student Full Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>

                <FormControl id="phone" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Phone Number</FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>

                <FormControl id="address" isRequired>
                <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Address</FormLabel>
                  <Input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>

                <FormControl id="gender" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Gender</FormLabel>
                  <Select
                    id="gender"
                    placeholder="Select your gender"
                    value={formData.gender}
                    onChange={handleChange}
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                </FormControl>

                <FormControl id="dob" isRequired>
                <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Date of Birth</FormLabel>
                  <Input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>
              </Stack>
            </Box>
      

          {/* Right Column: Other Sections */}
     
            <Stack spacing={8}>
              {/* Academic and Experience Section */}
              <Box
                bg="white"
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading size="md" mb={4}>Academic and Experience</Heading>
                <Stack spacing={4}>
                  <FormControl id="grade" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Grade</FormLabel>
                    <Select
                      id="grade"
                      placeholder="Select your grade"
                      value={formData.grade}
                      onChange={handleChange}
                      borderRadius="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                      fontSize="1rem"
                    >
                      <option value="" label="Select grade" />
                      <option value="Grade 4" label="Grade 4" />
                      <option value="Grade 5" label="Grade 5" />
                      <option value="Grade 6" label="Grade 6" />
                      <option value="Grade 7" label="Grade 7" />
                      <option value="Grade 8" label="Grade 8" />
                      <option value="Grade 9" label="Grade 9" />
                      <option value="Grade 10" label="Grade 10" />
                      <option value="Grade 11" label="Grade 11" />
                      <option value="Grade 12" label="Grade 12" />
                    </Select>
                  </FormControl>

                  <FormControl as="fieldset" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Do you have any experience in coding?</FormLabel>
                    <RadioGroup
                      onChange={handleCodingExperienceChange}
                      value={formData.codingExperience}
                    >
                      <Stack direction="row">
                        <Radio value="yes" fontSize="1rem">Yes</Radio>
                        <Radio value="no" fontSize="1rem">No</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Box>

              {/* Consent and Scheduling Section */}
              <Box
                bg="white"
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading size="md" mb={4}>Consent and Scheduling</Heading>
                <Stack spacing={4}>
                  <FormControl as="fieldset" id="photoConsent" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Do you agree to share photos on the website?</FormLabel>
                    <RadioGroup
                      onChange={handlePhotoConsentChange}
                      value={formData.photoConsent}
                    >
                      <Stack direction="row">
                        <Radio value="yes" fontSize="1rem">Yes</Radio>
                        <Radio value="no" fontSize="1rem">No</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl id="lessonDay" isRequired>
                  <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Choose your lesson day</FormLabel>
                    <Select
                      id="lessonDay"
                      placeholder="Select a day"
                      value={formData.lessonDay}
                      onChange={handleChange}
                      borderRadius="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                      fontSize="1rem"
                    >
                      <option value="wednesday">Wednesday at 6:30 PM (2 hours)</option>
                      <option value="thursday">Thursday at 6:30 PM (2 hours)</option>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>

              {/* Additional Information Section */}
              <Box
                bg="white"
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading size="md" mb={4}>Additional Information</Heading>
                <FormControl id="comments">
                <FormLabel fontSize="lg" fontWeight="medium" color="gray.600">Comments</FormLabel>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Enter any comments or additional information here"
                    borderRadius="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "cyan.400", boxShadow: "none" }}
                    fontSize="1rem"
                  />
                </FormControl>
              </Box>
            </Stack>
      
        </SimpleGrid>

        <Box mt={8}>
          <Button
            type="submit"
            bgColor="blue.500"
            color={'white'}
            size="lg"
            width="full"
            isLoading={isSubmitting}
            fontSize="1.2rem"
            _hover={{ bgColor: "blue.600" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegistrationForm;
