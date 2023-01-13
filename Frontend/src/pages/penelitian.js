import {
  Box,
  Container,
  Text,
  Button,
//   createIcon,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation({gbr}) {
  return (
    <>
      <Container maxW={'6xl'}>
        <Stack
          as={Box}
          align={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 5, md: 10 }}>
          <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"50vh"} src={'./penelitian.png'} />
          <Text color={'gray.500'} 
                fontSize={'5xl'}
                fontWeight={500}>
            Penelitian
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Text color={'gray.500'} 
                fontSize={'lg'}
                fontWeight={500}>
                Ambil Form Data Diri
            </Text>
            <Button
              colorScheme={'blackAlpha'}
              bg={useColorModeValue('#67282A', 'white')}
              rounded={'full'}
              px={6}
              _hover={{
                bg: useColorModeValue('#4D1315', 'gray'),
              }}>
              Disini
            </Button>
          </Stack>
        </Stack>
        {/* <Wave w={'100vh'}/> */}
      </Container>
    </>
  );
}

/* const Wave = createIcon({
    displayName: 'Wave',
    viewBox: '0 0 1280 320',
    fillOpacity: '1',
    path: (
      <path
        fillRule="inherit"
        d="M0,192L30,186.7C60,181,120,171,180,144C240,117,300,75,360,80C420,85,480,139,540,149.3C600,160,660,128,720,133.3C780,139,840,181,900,202.7C960,224,1020,224,1080,197.3C1140,171,1200,117,1260,106.7C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        fill="#0099ff"
      />
    ),
  }); */