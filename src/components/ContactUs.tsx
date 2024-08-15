import '@fontsource/poppins'; 
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Icon,
} from '@chakra-ui/react';
import {FaHighlighter,FaAddressBook,FaEnvelope, FaPhone} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div> {/* Contact Us Section */}
    <Box bg="#f0f4f8" py={10} px={4} id="contact-us">
      <Container maxW="container.xl">
        <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' as="h2" size="lg" mb={4}>
              <Icon as={FaAddressBook} color="yellow.500" fontSize={'2rem'}  /> Contact Us 
        </Heading>
        <VStack spacing={4}>
          {/* <Image src={contactUsImage} borderRadius="lg" alt="Contact Us Image" /> */}
          <Text>
          <Icon as={FaHighlighter} color="yellow.500" mr={2} />
            Have questions or want to get in touch? We're here to help! Reach out to us via email or phone, and we'll get back to you as soon as possible.
          </Text>
          <Text display={'flex'} gap={'2'} alignItems={'center'}>
            <Icon as={FaEnvelope} color="red.500" fontSize={'1.2rem'} /> codeheroeskids@gmail.com
           
          </Text>
          <Text display={'flex'} gap={'2'} alignItems={'center'}>
            <Icon as={FaPhone} color="blue.500" fontSize={'1.2rem'} />  Phone: 403-700-6458
          </Text>
        </VStack>
      </Container>
    </Box></div>
  )
}

export default ContactUs