import { Box, Container, Flex, Heading, Icon, Image, List, ListIcon, ListItem } from '@chakra-ui/react'
import missionImage from '../assets/ch2.jpg';
import { FaAward, FaLightbulb } from 'react-icons/fa'

const Mission = () => {
  return (
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
  )
}

export default Mission