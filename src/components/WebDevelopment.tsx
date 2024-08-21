import { Box, Container, Flex, HStack, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react'
import ProgramDetails from './ProgramDetails'
import htmlImage from '../assets/html.webp';
import cssImage from '../assets/css.webp';
import jsImage from '../assets/js.webp';
import bsImage from '../assets/bootstrap.svg.png';
import programsImage from '../assets/programs.webp';
import { FaLaptopCode } from 'react-icons/fa';


const WebDevelopment = () => {
  return (
    <Box bg="#f0f4f8" py={12} px={4}  borderRadius="md" boxShadow="md" id="programs">
        <Container maxW="container.xl">
            <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' paddingBottom={'3rem'} as="h2" size="lg" mb={4}>
                <Icon as={FaLaptopCode} color="red.600" fontSize={'2rem'}  /> Our Program
            </Heading>

            <VStack spacing={12} align="center">
            
            <Flex  direction={{ base: 'column', lg: 'row' }} gap={'4rem'} alignItems={'center'}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading textAlign="center" as="h3" size="lg" mb={4} color="cyan.500">
                        Welcome to Our <Text as="span" color="cyan.500"> Web Development Adventure for Kids!</Text>
                </Heading>
                <Box maxW="lg" >
                    <Text fontSize="lg" color="gray.600" textAlign="center">
                        At CodeHeroes, we’re on a mission to inspire the next generation of coding heroes. Our programs are carefully crafted to introduce kids to the exciting world of web development in a fun and engaging way. Through hands-on projects and interactive learning experiences, we empower kids to unleash their creativity and explore the limitless possibilities of coding.
                    </Text>
                </Box>
                <ProgramDetails></ProgramDetails>

                <Box flex="1" display={'flex'}  mt={3} justifyContent={'center'} textAlign="center">
                
                    <Image src={programsImage} width={{base:'70vw', md:'30vw'}} borderRadius="lg" alt="Programs Image" />
                </Box>

            </Flex>

            
            <Box maxW="lg" mt={'3rem'} >
                <Heading as="h3" size="md" mb={6} color="gray.700">
                    Web Development Journey
                </Heading>
                <HStack spacing={8} align="center" backgroundColor={'#FFF'} padding={'1rem'} justify="space-between" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                <Box flex="1" textAlign="left" >
                    <Heading as="h3" size="md" mb={2} color="gray.700">
                    HTML5
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                    Dive into the building blocks of the internet as kids learn to structure web pages and add content.
                    </Text>
                </Box>
                <Image
                    src={htmlImage}
                    borderRadius="md"
                    alt="HTML5"
                    maxW="5rem" // Adjusted size
                    h="auto" // Maintain aspect ratio
                    mb={4}
                />
                </HStack>
                <HStack spacing={8} align="center"  backgroundColor={'#FFF'} padding={'1rem'} justify="space-between" mt={12}  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                <Box flex="1" textAlign="left">
                    <Heading as="h3" size="md" mb={2} color="gray.700">
                    CSS3
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                    Unleash creativity by styling and beautifying their creations with Cascading Style Sheets.
                    </Text>
                </Box>
                <Image
                    src={cssImage}
                    borderRadius="md"
                    alt="CSS3"
                    maxW="5rem" // Adjusted size
                    h="auto" // Maintain aspect ratio
                    mb={4}
                />
                </HStack>
                <HStack spacing={8} align="center" backgroundColor={'#FFF'} padding={'1rem'} justify="space-between" mt={12}  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                <Box flex="1" textAlign="left">
                    <Heading as="h3" size="md" mb={2} color="gray.700">
                    JavaScript
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                    Bring websites to life with interactive elements and dynamic functionality.
                    </Text>
                </Box>
                <Image
                    src={jsImage}
                    borderRadius="md"
                    alt="JavaScript"
                    maxW="5rem" // Adjusted size
                    h="auto" // Maintain aspect ratio
                    mb={4}
                />
                </HStack>
                <HStack spacing={8} align="center" backgroundColor={'#FFF'} padding={'1rem'} justify="space-between" mt={12}  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                <Box flex="1" textAlign="left">
                    <Heading as="h3" size="md" mb={2} color="gray.700">
                    Bootstrap
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                    Master the latest technologies like Bootstrap for creating responsive and mobile-friendly websites.
                    </Text>
                </Box>
                <Image
                    src={bsImage}
                    borderRadius="md"
                    alt="Bootstrap"
                    maxW="5rem" // Adjusted size
                    h="auto" // Maintain aspect ratio
                    mb={4}
                />
                </HStack>
            </Box>
        </Flex>
        
            </VStack>
        </Container>
    </Box>
  )
}

export default WebDevelopment