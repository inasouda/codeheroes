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
  SimpleGrid,
} from '@chakra-ui/react';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
 
  phone: string;
  address: string;
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
    <Box maxW="4xl" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading mb={6} textAlign="center" color="cyan.600" fontSize="2rem">
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {/* Left Column: Personal Information */}
          <Box>
            <Box bg="cyan.50" p={4} borderRadius="md" mb={{ base: 4, lg: 0 }}>
              <Heading size="md" mb={4} fontSize="1.5rem">Personal Information</Heading>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel fontWeight="bold" fontSize="1.1rem">Name</FormLabel>
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
                  <FormLabel fontWeight="bold" fontSize="1.1rem">Email</FormLabel>
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
                  <FormLabel fontWeight="bold" fontSize="1.1rem">Phone Number</FormLabel>
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
                  <FormLabel fontWeight="bold" fontSize="1.1rem">Address</FormLabel>
                  <Input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
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
              <Box bg="red.50" p={4} borderRadius="md">
                <Heading size="md" mb={4} fontSize="1.5rem">Academic and Experience</Heading>
                <Stack spacing={4}>
                  <FormControl id="grade" isRequired>
                    <FormLabel fontWeight="bold" fontSize="1.1rem">Grade</FormLabel>
                    <Select
                      id="grade"
                      placeholder="Select your grade"
                      value={formData.grade}
                      onChange={handleChange}
                      fontSize="1rem"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 3).map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl as="fieldset" isRequired>
                    <FormLabel as="legend" fontWeight="bold" fontSize="1.1rem">Do you have any experience in coding?</FormLabel>
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
              <Box bg="cyan.50" p={4} borderRadius="md">
                <Heading size="md" mb={4} fontSize="1.5rem">Consent and Scheduling</Heading>
                <Stack spacing={4}>
                  <FormControl as="fieldset" id="photoConsent" isRequired>
                    <FormLabel as="legend" fontWeight="bold" fontSize="1.1rem">Do you agree to share photos on the website?</FormLabel>
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
                    <FormLabel fontWeight="bold" fontSize="1.1rem">Choose your lesson day</FormLabel>
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
              <Box bg="red.50" p={4} borderRadius="md">
                <Heading size="md" mb={4} fontSize="1.5rem">Additional Information</Heading>
                <FormControl id="comments">
                  <FormLabel fontWeight="bold" fontSize="1.1rem">Comments</FormLabel>
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
