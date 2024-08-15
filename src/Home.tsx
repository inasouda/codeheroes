import '@fontsource/poppins'; 
import {
  Box,
  Flex,
  Image,
  Button,
  Heading,
  Text,
  Container,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaAward,FaUsers, FaRocket, FaLightbulb, FaCode, FaSuperpowers, FaLaptopCode} from 'react-icons/fa';
import codeHeroesImage from './assets/codeheroes8.png';
import missionImage from './assets/ch2.jpg';
import programsImage from './assets/programs.jpg';
import aboutUsImage from './assets/logoi.png';
import { Link } from 'react-router-dom';

import htmlImage from './assets/html.png';
import cssImage from './assets/css.png';
import jsImage from './assets/js.png';
import bsImage from './assets/bootstrap.svg.png';

import MyCarousel from './components/Carousel';
import ContactUs from './components/ContactUs';
import ParentOpinion from './components/ParentOpinion';
import OurHeroes from './components/OurHeroes';
import lama from './assets/lama.jpg'
import noha from './assets/noha.jpg'
import rasha from './assets/rasha.jpg'



const Home = () => {

  const images = [
    codeHeroesImage,
  ];

  return (
    <Box fontFamily="Poppins, sans-serif">
      {/* Image Carousel */}
      <MyCarousel images={images} />
      <Box
        textAlign="center"
      >
         <Link to="/register">
            <Button colorScheme='red' color={'#fff'} size="lg" mt={4} leftIcon={<FaRocket />}>
            REGISTER
            </Button>
        </Link>
      </Box>
      {/* <Box display="flex" justifyContent="center" alignItems="center" position="relative">
        <Image
          src={imageSrc}
          w="80%" // Set the width to 80%
          objectFit="cover"
          alt="Carousel"
          h={{ base: '30rem', md: '40rem' }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Button colorScheme="green" size="lg" mt={4} leftIcon={<FaRocket />}>
            REGISTER
          </Button>
        </Box>
      </Box> */}
      

      {/* Mission Section */}
      <Box py={10} px={4} my={8} borderRadius="lg"  id="mission">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', lg: 'row' }} gap={'3rem'} alignItems={'center'}>
            <Box flex="1" >
              <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' as="h2" size="lg" mb={4}>
              <Icon as={FaAward} color="red.600" fontSize={'2rem'}  /> Our Mission  
              </Heading>
              <List spacing={3}>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb} fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Empowering Education: </strong> 
                  We believe every child deserves access to quality coding education.</p> 
                </ListItem>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb} fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Innovation and Creativity:</strong> Our mission is to foster a generation of young learners who are proficient in technology and empowered to innovate and create.</p>
                </ListItem>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb} fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Engaging Curriculum:</strong> Through carefully crafted programs and curriculum, we provide an engaging and supportive learning environment for children to explore the exciting world of coding.</p>
                </ListItem>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb} fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Building Skills:</strong> Our goal is not only to teach coding skills but also to instill confidence, critical thinking, and problem-solving abilities in our students.</p>
                </ListItem>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb}  fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Fun and Inclusivity:</strong> We make coding fun, accessible, and inclusive, inspiring young minds to unlock their potential.</p>
                </ListItem>
                <ListItem display={'flex'} flexDirection={'row'}>
                  <ListIcon as={FaLightbulb} fontSize={'1.2rem'} color="yellow.500" />
                  <p><strong>Preparing for the Future:</strong> By preparing children for the challenges and opportunities of the digital age, we aim to nurture the next generation of digital creators and innovators.</p>
                </ListItem>
              </List>
            </Box>
            <Box flex="1"  padding={'1rem'} textAlign="center">
              <Image src={missionImage} borderRadius="lg" alt="Mission Image" />
            </Box>
          </Flex>
        </Container>
      </Box>
      
      {/* Web Development Section */}
      <Box bg="#f0f4f8" py={12} px={4}  borderRadius="md" boxShadow="md" id="programs">
        <Container maxW="container.xl">
          <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' paddingBottom={'3rem'} as="h2" size="lg" mb={4}>
                <Icon as={FaLaptopCode} color="red.600" fontSize={'2rem'}  /> Our Programs  
          </Heading>

          <VStack spacing={12} align="center">
            
          <Flex  direction={{ base: 'column', lg: 'row' }} gap={'4rem'} alignItems={'center'}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Heading textAlign="center" as="h3" size="lg" mb={4} color="cyan.500">
                      Welcome to Our <Text as="span" color="cyan.500">Web Development Adventure for Kids!</Text>
                </Heading>
                <Box maxW="lg" >
                    <Text fontSize="lg" color="gray.600" textAlign="center">
                      At CodeHeroes, we’re on a mission to inspire the next generation of coding heroes. Our programs are carefully crafted to introduce kids to the exciting world of web development in a fun and engaging way. Through hands-on projects and interactive learning experiences, we empower kids to unleash their creativity and explore the limitless possibilities of coding.
                    </Text>
                </Box>
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


      {/* About Us Section */}
      <Box  py={10} px={4} my={2} id="about-us">
        <Container maxW="container.xl">
          <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' as="h2" size="lg" mb={4}>
                <Icon as={FaUsers} color="cyan.500" fontSize={'2rem'}  /> About Us 
          </Heading>
        
          <VStack spacing={4}>
            <Image src={aboutUsImage} borderRadius="lg"  maxW={'50vw'} alt="About Us Image" />
            <Box display="flex" >
              {/* <Icon as={FaLightbulb} color="yellow.500" mr={2} /> */}
              <Text fontWeight={'bold'} color={'purple'} fontSize={'1.2rem'}>
                Welcome to CodeHeroes, Where Coding Dreams Begin!
              </Text>
            </Box>
            <Box display="flex" >
              <Icon as={FaUsers} color="green.500" mr={2} />
              <Text>
                At CodeHeroes, we are more than just a team — we are passionate advocates for coding education tailored for kids. Our mission is simple yet profound: to make coding not only accessible but also enjoyable for children aged 9 to 18.
              </Text>
            </Box>
            <Box display="flex" >
              <Icon as={FaCode} color="cyan.500" mr={2} />
              <Text>
                We believe that coding is not just a technical skill but a superpower waiting to be unleashed. It's about creativity, problem-solving, and shaping the future. That's why we're dedicated to providing engaging, hands-on learning experiences that ignite curiosity and foster a lifelong love for coding.
              </Text>
            </Box>

            <Box display="flex" >
              <Icon as={FaSuperpowers} color="purple.500" mr={2} />
              <Text>
                Join us on this exciting journey as we empower the next generation of digital innovators. Together, let's embark on a coding adventure where imagination knows no bounds, and every line of code is a step towards a brighter tomorrow.
              </Text>
            </Box>

            <Box display="flex" fontSize={'1.2rem'} fontWeight={'bold'} color={"purple.500"}>
              <Text>
                Are you ready to become a CodeHero? Let's code the future together!
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    {/*Our Codeheroes section */}
      {/* <Box py={8} px={4} bg="cyan.100" borderRadius="lg"> */}
      <OurHeroes />
        
      {/* </Box> */}
  {/* Parent Opinions Section */}
  <Box py={10} bg="cyan.500">
        <Container maxW="container.xl">
          <Heading as="h2" size="lg" mb={12} textAlign="center" color="white">
            What Parents Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
            <ParentOpinion 
              imageSrc={rasha} 
              parentName='Rasha Elkassas' 
              opinion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam blanditiis asperiores consequuntur eum facilis! Eum, blanditiis praesentium, facere optio voluptatum ratione quibusdam, neque numquam hic molestiae autem animi unde assumenda.' 
            />
            <ParentOpinion 
              imageSrc='' 
              parentName='Noha ElKaddah' 
              opinion='Thanks so much Inas for teaching this course that was a great opportunity for my daughter to learn new skills that will help in her career development and make better use of her time instead of just playing on her phone.     
              I would like to mention what salma wrote "Thank u inas this means much to me. I had so much fun at code heroes, and I had so much fun 💗 - salma"' 
            />
            <ParentOpinion 
              imageSrc={lama}
              parentName='Lama' 
              opinion='My children are blessed and lucky to have such an incredible coding teacher like Ms. Inas. She is truly dedicated and genuinely passionate about her work. My children learned a lot from the program which they will carry with them for their future education journey. I DO highly recommend taking this program since it will definitely contribute to your children’s knowledge. Thank you Ms. Inas for all your invaluable efforts.' 
            />
            <ParentOpinion 
              imageSrc={noha}
              parentName='Noha Fathy' 
              opinion='I will write my son’s opinion about CodeHeros for:

              What is good about codeheros 
              if I am you I would sign my kids up for codeheros and I myself would continue in codeheros and here is why 
              
              - the best teacher in the whole entire world Mrs Inas
              - you will learn a lot from this class 
              - you will have fun with your other fellow students 
              - And u will have the best time of your life 
              
              Everyone asked me if I will continue 
              And my answer is yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              100000000000% sure
              - from Yahya Mahmoud a codeheros student' 
            />
            <ParentOpinion 
              imageSrc='' 
              parentName='Nourham' 
              opinion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam blanditiis asperiores consequuntur eum facilis! Eum, blanditiis praesentium, facere optio voluptatum ratione quibusdam, neque numquam hic molestiae autem animi unde assumenda.' 
            />
          </SimpleGrid>
        </Container>
      </Box>
      <ContactUs></ContactUs>
    </Box>
  );
};

export default Home;
