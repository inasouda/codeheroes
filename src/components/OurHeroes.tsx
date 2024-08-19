import React from 'react';
import Slider from 'react-slick';
import { Box, Heading, Icon, Image } from '@chakra-ui/react';
import laila from '../assets/laila.jpg';
import judy from '../assets/judy2.jpg';
import heroes2 from '../assets/heroes2.jpg';
import salma from '../assets/salma2.jpg';
import cake from '../assets/cake.jpg';
import julia from '../assets/jolia.jpg';
import heidi from '../assets/heidi3.jpg';
import yahya from '../assets/yahya2.jpg';
import zeyad from '../assets/zeyad.jpg';
import lily from '../assets/lily2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMask } from 'react-icons/fa';

const heroes = [
  { imageSrc: laila },
  { imageSrc: salma },
  { imageSrc: lily },
  { imageSrc: heroes2 },
  { imageSrc: heidi },
  { imageSrc: yahya },
  { imageSrc: julia },
  { imageSrc: judy },
  { imageSrc: zeyad },
  { imageSrc: cake },



];

const OurHeroes: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box id='our-heroes' py={10} px={4} bg="cyan.50" textAlign="center">
      <Heading
        display="flex"
        color="blue.600"
        alignItems="center"
        justifyContent="center"
        gap="0.5rem"
        as="h2"
        size="lg"
        mb={4}
      >
        <Icon as={FaMask} color="red" fontSize="2rem" /> Our Heroes
      </Heading>
      <Box maxW={{ base: '100%', md: '50%' }} mx="auto">
        <Slider {...settings}>
          {heroes.map((hero, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" overflow="hidden">
              <Image
                src={hero.imageSrc}
                alt={`Hero ${index + 1}`}
                objectFit="cover"
                w="50rem"
                h={{ base: '30rem', md: '40rem' }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurHeroes;
