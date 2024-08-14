import {
    Box,
    Flex,
    Image,
    Button,
    Container,
    VStack,
    HStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useDisclosure,
  } from '@chakra-ui/react';

import { FaRocket, FaBars} from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          onClose();
        }
        else{
            window.location.href = `/#${id}`;
            onClose();

        }
      };
    
  return (
    <>   
    {/* Navigation Bar */}
    <Box as="nav" bg="white" position="sticky" top="0" zIndex="10000" boxShadow="md">
      <Container maxW="container.xl" h={'5rem'}>
        <Flex justifyContent="space-between" h='20' alignItems="center">
          <Image src={logo} maxH="4.5rem" alt="Logo" />
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }}
            onClick={() => handleScrollTo('mission')}

            >
              Our Mission
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }}
              onClick={() => handleScrollTo('programs')}>
              Programs
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }}
              onClick={() => handleScrollTo('about-us')}>
              About Us
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }}
              onClick={() => handleScrollTo('contact-us')}>                              
              Contact Us
            </Button>
            <Link to="/free-lesson">
              <Button colorScheme="red" leftIcon={<FaRocket />} onClick={()=>onClose()}>
                Try Free Lesson
              </Button>
          </Link>
         
          </HStack>
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Container>
    </Box>

    {/* Drawer Menu */}
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody paddingTop={'2rem'}>
          <VStack spacing={4} align="start">
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }} onClick={() => {handleScrollTo('mission')}}>
            
              Our Mission
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }} onClick={() => {handleScrollTo('programs')}}>
              Programs
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }} onClick={() => {handleScrollTo('about-us')}}>
              About Us
            </Button>
            <Button variant="link" colorScheme="cyan" sx={{ _hover: { color: 'red.500' } }} onClick={() => {handleScrollTo('contact-us')}}>
              Contact Us
            </Button>
            <Link to="/free-lesson">
              <Button colorScheme="red" leftIcon={<FaRocket />}  onClick={()=>onClose()}>
                Try Free Lesson
              </Button>
            </Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default NavBar
