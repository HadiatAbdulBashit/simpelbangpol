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
import Wave from '../components/wave';

export default function Magang() {
  return (
    <>
      <Header />
      <Wave />
      <Box
      backgroundColor={'#67282A'}>
        <FormPengajuan />
      </Box>
      <Wave rotate={'rotate(180deg)'} />
    </>
  );
}

const Header = () => {
  return (
    <Container maxW={'6xl'} pb={'60px'}>
        <Stack
        as={Box}
        align={'center'}
        spacing={{ base: 8, md: 14 }}
        py={4}>
          <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"50vh"} src={'./pkl.png'} />
          <Text 
          color={'gray.500'} 
          fontSize={'5xl'}
          mt={0}
          fontWeight={500}>
            PKL/Magang/KKN/Pengabdian Masyarakat
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
              PKL/Magang/KKN/Pengabdian Masyarakat
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