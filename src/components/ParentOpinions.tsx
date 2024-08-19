import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import ParentOpinion from "./ParentOpinion"
import lama from '../assets/lama.jpg'
import noha from '../assets/noha.jpg'
import nohak from '../assets/nohak.png'
import rasha from '../assets/rasha.jpg'

const ParentOpinions = () => {
  return (
    <Box py={10} bg="cyan.500" id='parents-opinion'>
        <Container maxW="container.xl">
        <Heading as="h2" size="lg" mb={12} textAlign="center" color="white">
            What Parents Say
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
        <ParentOpinion 
            imageSrc={lama}
            parentName='Lama' 
            opinion='My children are blessed and lucky to have such an incredible coding teacher like Ms. Inas. She is truly dedicated and genuinely passionate about her work. My children learned a lot from the program which they will carry with them for their future education journey. I DO highly recommend taking this program since it will definitely contribute to your children’s knowledge. Thank you Ms. Inas for all your invaluable efforts.' 
            />
            <ParentOpinion 
            imageSrc={rasha} 
            parentName='Rasha' 
            opinion= "It was always a wish to enroll my daughter in coding. We gave it a try and it worked really well. MY daughter really enjoyed the program. I wasn't sure until I attended her presentation at the end of the program and I was really impressed by her presentation and how she was able to create a web page with all the needed criteria and information. Thanks Mrs Inas for the dedicated  efforts and work with our children. I highly recommend the program and my daughter is looking forward for her next class. Thank again Mrs Inas "
            />
            <ParentOpinion 
            imageSrc={nohak} 
            parentName='Noha' 
            opinion='Thanks so much Inas for teaching this course that was a great opportunity for my daughter to learn new skills that will help in her career development and make better use of her time instead of just playing on her phone.     
            I would like to mention what salma wrote "Thank u inas this means much to me. I had so much fun at code heroes, and I had so much fun 💗 - salma"' 
            />
        
            <ParentOpinion 
            imageSrc={noha}
            parentName='Noha' 
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
            {/* <ParentOpinion 
            imageSrc='' 
            parentName='Nourham' 
            opinion='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam blanditiis asperiores consequuntur eum facilis! Eum, blanditiis praesentium, facere optio voluptatum ratione quibusdam, neque numquam hic molestiae autem animi unde assumenda.' 
            /> */}
            <ParentOpinion 
            imageSrc={''} 
            parentName='Mohamed' 
            opinion='Thank you, this program has really helped my kids improve their logical thinking, and I am looking forward to continuing,' 
            />
        </SimpleGrid>
        </Container>
    </Box>

  )
}

export default ParentOpinions