import React from 'react';
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';

const ProgramDetails: React.FC = () => {
  const startDate = new Date('2024-09-16');
  const endDate = new Date('2025-06-27');
  const duration = `${startDate.toDateString()} to ${endDate.toDateString()}`;
  const lessonSchedule = "One lesson per week, 2 hours each";

  return (
    <Box 
      p={4} 
      borderWidth={1} 
      borderRadius="lg" 
      boxShadow="lg" 
      maxW="lg" 
      mx="auto" 
      bg="white"
      my={2}
      textAlign={'center'}
    >
      <Heading as="h6" size="md" mb={4} color="cyan.600">
        Program Duration & Schedule
      </Heading>
      <Stack spacing={2}>
        <Text fontSize="md" color="gray.600">
          <strong>Program Duration:</strong> {duration}
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.600">
          <strong>Lesson Schedule:</strong> {lessonSchedule}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProgramDetails;
