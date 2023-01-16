import {
  Box,
  Container,
  Text,
  Button,
  Link,
  Stack,
  useColorModeValue,
  Image,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function Penelitian() {
  return (
    <>
      <Header />
      <Box
      backgroundColor={'#67282A'}>
        <FormPengajuan />
      </Box>
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

const Header = () => {
  return (
    <Container maxW={'6xl'} pb={'60px'}>
        <Stack
        as={Box}
        align={'center'}
        spacing={{ base: 8, md: 14 }}
        py={4}>
          <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"50vh"} src={'./penelitian.png'} />
          <Text 
          color={'gray.500'} 
          fontSize={'5xl'}
          mt={0}
          fontWeight={500}>
            Penelitian
          </Text>
          <Stack
          direction={'column'}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
            <Text 
            color={'gray.500'} 
            fontSize={'lg'}
            fontWeight={500}>
              Ambil Form Data Diri
            </Text>
            <Link 
                href={'https://docs.google.com/document/d/1b0MoR8wdXdRiF8kOFfUhWXwu_lpc_LAA/edit?usp=sharing&ouid=107978745127769060560&rtpof=true&sd=true'}
                target={'_blank'}
                _hover={{ 
                  textDecoration: 'none' }}>
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
              </Link>
          </Stack>
        </Stack>
      </Container>
  );
};

const FormPengajuan = () => {
  return (
    <Container 
    maxW={'6xl'}
    color={'white'}
    align={'center'}
    justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'5xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Text fontSize={'lg'}>
              Pengajuan Surat
            </Text>
            <Text  fontSize={'4xl'} textAlign={'center'} as={'b'} color={'gray.100'}>
              Penelitian
            </Text>
          </Stack>
          <Box
            p={8}>
            <Stack spacing={4}>
            <FormControl id="namaLengkap" isRequired align={'left'}>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'60%'} />
            </FormControl>
            <FormControl id="judulPenelitian" isRequired align={'left'}>
              <FormLabel>Judul Penelitian</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'80%'} />
            </FormControl>
            <FormControl id="noWhatsapp" isRequired align={'left'}>
              <FormLabel>No Whatsapp</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'60%'} />
            </FormControl>
            <FormControl id="kptKartuPelajar" isRequired align={'left'}>
              <FormLabel>KTP / Kartu Pelajar</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
            <FormControl id="ktm" isRequired align={'left'}>
              <FormLabel>KTM</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
            <FormControl id="setifikatVaksin" isRequired align={'left'}>
              <FormLabel>Sertifikat Vaksin</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
            <FormControl id="suratKampus" isRequired align={'left'}>
              <FormLabel>Surat Kampus (Tanda Tangan & Cap Basah)</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
            <FormControl id="proposalPenelitian" isRequired align={'left'}>
              <FormLabel>Proposal Penelitian</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
            <FormControl id="dataDiri" isRequired align={'left'}>
              <FormLabel>Data Diri</FormLabel>
              <Input type="text" variant={'filled'} color={'black'} _focus={{color: 'white'}} width={'40%'} />
            </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'gray.100'}
                  color={'#67282A'}
                  _hover={{
                    bg: 'gray.400',
                  }}>
                  Kirim
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
    </Container>
  );
};