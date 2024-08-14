import React from 'react';
import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

interface ParentOpinionProps {
  imageSrc: string;
  parentName: string;
  opinion: string;
}

const ParentOpinion: React.FC<ParentOpinionProps> = ({ imageSrc, parentName, opinion }) => {
  return (
    <Box p={4} borderWidth={1} mb={4} borderRadius="lg" boxShadow="lg" maxW="md" mx="auto" bg="white">
      <Flex alignItems="center">
        <Avatar src={imageSrc} size="xl" mr={4} />
        <Text fontSize="xl" fontWeight="bold" color="cyan.700">
          {parentName}
        </Text>
      </Flex>
      <Box mt={4}>
        <Text fontSize="md" color="gray.600">
          {opinion}
        </Text>
      </Box>
    </Box>
  );
};

export default ParentOpinion;
