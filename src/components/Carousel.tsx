// MyCarousel.tsx
import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Import the carousel styles

interface MyCarouselProps {
  images: string[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ images }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={images.length}
    isIntrinsicHeight
  >
    <Box position="relative">
      <Slider>
        {images.map((image, index) => (
          <Slide key={index} index={index}>
            <Image
              src={image}
              w="100%" // Set the width to 80%
              objectFit="cover"
              alt={`Carousel Image ${index + 1}`}
              h={{ base: '30rem', md: '40rem' }}
            />
          </Slide>
        ))}
      </Slider>
      <Box
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Previous Slide"
      >
        <ButtonBack>
          ‹
        </ButtonBack>
      </Box>
      <Box
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Next Slide"
      >
        <ButtonNext>
          ›
        </ButtonNext>
      </Box>
      
    </Box>
  
  </CarouselProvider>
);

export default MyCarousel;
