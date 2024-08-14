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
      m={8}
      p={6}
      bg="cyan.50"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={8}  textAlign="center" color="cyan.600" fontSize="2rem">
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {/* Left Column: Personal Information */}
          <Box>
            <Box bg="white"   
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg" 
                p={4}  mb={{ base: 4, lg: 0 }}>
                        <Heading size="md" mb={4}>Personal Information</Heading>
                        <Stack spacing={4}>
                            <FormControl id="name" isRequired>
                            <FormLabel fontWeight="bold">Name</FormLabel>
                            <Input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                fontSize="1rem"
                            />
                            </FormControl>

                            <FormControl id="email" isRequired>
                            <FormLabel fontWeight="bold">Email</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                fontSize="1rem"
                            />
                            </FormControl>

                            <FormControl id="phone" isRequired>
                            <FormLabel fontWeight="bold">Phone Number</FormLabel>
                            <Input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                fontSize="1rem"
                            />
                            </FormControl>

                            <FormControl id="address" isRequired>
                            <FormLabel fontWeight="bold">Address</FormLabel>
                            <Input
                                type="text"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                fontSize="1rem"
                            />
                            </FormControl>

                            <FormControl id="gender" isRequired>
                            <FormLabel fontWeight="bold">Gender</FormLabel>
                            <Select
                                id="gender"
                                placeholder="Select your gender"
                                value={formData.gender}
                                onChange={handleChange}
                                fontSize="1rem"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                            </FormControl>

                            <FormControl id="dob" isRequired>
                            <FormLabel fontWeight="bold">Date of Birth</FormLabel>
                            <Input
                                type="date"
                                id="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                fontSize="1rem"
                            />
                            </FormControl>
                        </Stack>
            </Box>
          </Box>

          {/* Right Column: Other Sections */}
          <Box>
            <Stack spacing={8}>
              {/* Academic and Experience Section */}
              <Box bg="white" p={4} 
               borderWidth={1}
               borderRadius="lg"
               boxShadow="lg">
                <Heading size="md" mb={4}>Academic and Experience</Heading>
                <Stack spacing={4}>
                  <FormControl id="grade" isRequired>
                    <FormLabel fontWeight="bold">Grade</FormLabel>
                    <Select
                      id="grade"
                      placeholder="Select your grade"
                      value={formData.grade}
                      onChange={handleChange}
                      fontSize="1rem"
                    >
                      {/* {Array.from({ length: 10 }, (_, i) => i + 3).map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))} */}
                            <option value="" label="Select grade" />
                        {/* <option value="PRE-K" label="PRE-K" />
                        <option value="Kindergarten" label="Kindergarten" />
                        <option value="Grade 1" label="Grade 1" />
                        <option value="Grade 2" label="Grade 2" />
                        <option value="Grade 3" label="Grade 3" /> */}
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
                    <FormLabel as="legend" fontWeight="bold">Do you have any experience in coding?</FormLabel>
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
            <Box bg="white" p={4}
             borderWidth={1}
             borderRadius="lg"
             boxShadow="lg">
                <Heading size="md" mb={4}>Consent and Scheduling</Heading>
                <Stack spacing={4}>
                <FormControl as="fieldset" id="photoConsent" isRequired>
                    <FormLabel as="legend" fontWeight="bold">Do you agree to share photos on the website?</FormLabel>
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
                    <FormLabel fontWeight="bold">Choose your lesson day</FormLabel>
                    <Select
                    id="lessonDay"
                    placeholder="Select a day"
                    value={formData.lessonDay}
                    onChange={handleChange}
                    fontSize="1rem"
                    >
                    <option value="wednesday">Wednesday at 6:30 PM (2 hours)</option>
                    <option value="thursday">Thursday at 6:30 PM (2 hours)</option>
                    </Select>
                </FormControl>
                </Stack>
            </Box>

              {/* Additional Information Section */}
              <Box bg="white" p={4} 
               borderWidth={1}
               borderRadius="lg"
               boxShadow="lg">
                <Heading size="md" mb={4}>Additional Information</Heading>
                <FormControl id="comments">
                  <FormLabel fontWeight="bold">Comments</FormLabel>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Enter any comments or additional information here"
                    fontSize="1rem"
                  />
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>

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
      </form>
    </Box>
  );
};

export default RegistrationForm;
