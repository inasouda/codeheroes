import React, { useState } from 'react';
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
} from '@chakra-ui/react';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  codingExperience: string;
  grade: string;
  photoConsent: string; // Updated to string to handle radio values
  lessonDay: string;
  comments: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    codingExperience: '',
    grade: '',
    photoConsent: '',
    lessonDay: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
     
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleCodingExperienceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, codingExperience: value }));
  };

  const handlePhotoConsentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, photoConsent: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic here
    console.log(formData);
    toast({
      title: 'Account created.',
      description: 'Your account has been successfully created.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setIsSubmitting(false);
  };

  return (
    <Box maxW="md" mx="auto" m={5} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading mb={6} textAlign="center" color="blue.700">
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </FormControl>

          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </FormControl>

          <FormControl id="grade" isRequired>
            <FormLabel>Grade</FormLabel>
            <Select
              id="grade"
              placeholder="Select your grade"
              value={formData.grade}
              onChange={handleChange}
            >
              {Array.from({ length: 10 }, (_, i) => i + 3).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Do you have any experience in coding?</FormLabel>
            <RadioGroup
              onChange={handleCodingExperienceChange}
              value={formData.codingExperience}
            >
              <Stack direction="row">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl as="fieldset" id="photoConsent" isRequired>
            <FormLabel as="legend">Do you agree to share photos on the website?</FormLabel>
            <RadioGroup
              onChange={handlePhotoConsentChange}
              value={formData.photoConsent}
            >
              <Stack direction="row">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="lessonDay" isRequired>
            <FormLabel>Choose your lesson day</FormLabel>
            <Select
              id="lessonDay"
              placeholder="Select a day"
              value={formData.lessonDay}
              onChange={handleChange}
            >
              <option value="wednesday">Wednesday at 6:30 PM (2 hours)</option>
              <option value="thursday">Thursday at 6:30 PM (2 hours)</option>
            </Select>
          </FormControl>

          <FormControl id="comments">
            <FormLabel>Comments</FormLabel>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={8}
              placeholder="Enter any comments or additional information here"
            />
          </FormControl>

          <Button 
            type="submit" 
            color="white" 
            bgColor="cyan.500" 
            size="lg" 
            width="full" 
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
