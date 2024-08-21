import { Box, Container, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react"
import { FaCode, FaSuperpowers, FaUsers } from "react-icons/fa"
import aboutUsImage from '../assets/logoi.webp';


const AboutUs = () => {
  return (
    <Box  py={10} px={4} my={2} id="about-us">
        <Container maxW="container.xl">
            <Heading display={'flex'} color={'blue.600'} alignItems={'center'} justifyContent={'center'} gap='0.5rem' as="h2" size="lg" mb={4}>
                <Icon as={FaUsers} color="cyan.500" fontSize={'2rem'}  /> About Us 
            </Heading>

            <VStack spacing={4}>
                <Image src={aboutUsImage} borderRadius="lg"  maxW={'50vw'} alt="About Us Image" />
                <Box display="flex" >
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
  )
}

export default AboutUs