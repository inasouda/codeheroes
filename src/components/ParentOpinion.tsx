import React, { useState } from 'react';
import { Box, Avatar, Text, Flex, Button } from '@chakra-ui/react';

interface ParentOpinionProps {
  imageSrc: string;
  parentName: string;
  opinion: string;
}

const ParentOpinion: React.FC<ParentOpinionProps> = ({ imageSrc, parentName, opinion }) => {
  // State to control whether full text is shown
  const [showFullText, setShowFullText] = useState(false);

  // Toggle function
  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };

  // Decide what text to show
  const previewText = showFullText ? opinion : `${opinion.slice(0, 250)}...`;

  return (
    <Box
      p={4}
      borderWidth={1}
      mb={4}
      borderRadius="lg"
      boxShadow="lg"
      maxW={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}  // Responsive width
      mx="auto"
      bg="white"
    >
      <Flex alignItems="center" mb={4}>
        <Avatar src={imageSrc} objectFit="cover" size="lg" mr={4} />
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="cyan.700">
          {parentName}
        </Text>
      </Flex>
      <Box mt={4} maxW="100%" overflow="hidden">
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
          {previewText}
        </Text>
      </Box>
      <Button
        mt={2}
        size="sm"
        onClick={toggleShowText}
        colorScheme={showFullText ? 'red' : 'cyan'}
        variant="link"
      >
        {showFullText ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
};

export default ParentOpinion;
