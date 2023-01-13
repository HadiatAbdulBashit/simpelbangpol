import Hero from "../components/hero";

import { Box, SimpleGrid, Image, Text, Heading } from '@chakra-ui/react';

export default function Home(){
    return (
        <>
        <Hero />
        <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'center'}>
              <Text color={'red.800'}>
                MOTTO
              </Text>{' '}
        </Heading>
        <SimpleThreeColumns />
        </>
    )
}

const SimpleThreeColumns = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Box align={'center'}>
            <Image
                w={200} 
                h={200}
                src={"./dghati.png"}
            />
            <Text fontSize={'xl'} as={'b'}>Melayani Dengan Hati,</Text>
        </Box>
        <Box align={'center'}>
            <Image
                w={200} 
                h={200}
                src={"./sepenuhhati.png"}
            />
            <Text fontSize={'xl'} as={'b'}>Sepenuh Hati,</Text>
        </Box>
        <Box align={'center'}>
            <Image
                w={200} 
                h={200}
                src={"./hatihati.png"}
            />
            <Text fontSize={'xl'} as={'b'}>Dengan Hati-Hati,</Text>
        </Box>
        <Box align={'center'}>
            <Image
                w={200} 
                h={200}
                src={"./tdsskhati.png"}
            />
            <Text fontSize={'xl'} as={'b'}>dan Tidak Sesuka Hati</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}