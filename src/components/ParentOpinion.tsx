import React from 'react';
import { Box, Avatar, Text, Stack, Flex } from '@chakra-ui/react';

interface ParentOpinionProps {
  imageSrc: string;
  parentName: string;
  opinion: string;
}

const ParentOpinion: React.FC<ParentOpinionProps> = ({ imageSrc, parentName, opinion }) => {
  return (
    <Box p={4} borderWidth={1} mb={4} borderRadius="lg" boxShadow="lg" maxW="md" mx="auto" bg="white">
      <Flex alignItems="flex-start">
        <Avatar src={imageSrc} size="xl" mr={4} mt={1} />
        <Stack spacing={2}>
          <Text fontSize="xl" fontWeight="bold" color="cyan.700">
            {parentName}
          </Text>
          <Text fontSize="md" color="gray.600">
            {opinion}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ParentOpinion;
