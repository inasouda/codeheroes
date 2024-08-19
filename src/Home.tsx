import '@fontsource/poppins'; 
import {
  Box,
  Image,
} from '@chakra-ui/react';
import {FaRocket} from 'react-icons/fa';
import codeHeroesImage from './assets/codeheroes8.png';
import { Link } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import OurHeroes from './components/OurHeroes';
import CHButton from './components/CHButton';
import AboutUs from './components/AboutUs';
import WebDevelopment from './components/WebDevelopment';
import Mission from './components/Mission';
import ParentOpinions from './components/ParentOpinions';

const Home = () => {

  return (
    <Box fontFamily="Poppins, sans-serif">
      <Image
              src={codeHeroesImage}
              w="100%" // Set the width to 80%
              objectFit="cover"
              alt={`Codeheroes Image`}
              h={{ base: '30rem', md: '40rem' }}
            />
      <Box textAlign="center" mt={4}>
         <Link to="/register">
            <CHButton 
              text={'REGISTER'} 
              colorScheme='red'  
              color={'#fff'} 
              size="lg" 
              leftIcon={<FaRocket />}
              width="">
            </CHButton>
        </Link>
      </Box>
      
      <Mission/>
      <WebDevelopment/>
      <AboutUs/>
      <OurHeroes/>
      <ParentOpinions/>
      <ContactUs/>
    </Box>
  );
};

export default Home;
