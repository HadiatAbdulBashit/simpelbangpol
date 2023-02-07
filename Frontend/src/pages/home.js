import Hero from "../components/hero";
import Wave from "../components/wave";

import { Box, SimpleGrid, Image, Text, Heading, Stack, Flex } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

export default function Home() {
    return (
        <>
          <Box align={'center'}>
            <Hero />
            <SimpleThreeColumns />
          </Box>
          <Wave />
          <Box backgroundColor={'#67282A'} align={'center'}>
            <Halhal />
          </Box>
          <Wave rotate={'rotate(180deg)'} /> 
          <Box align={'center'}>
            <Persyaratan />
          </Box>
          <Wave />
          <Box backgroundColor={'#67282A'} align={'center'}>
            <Pelayanan />
          </Box>
          <Wave rotate={'rotate(180deg)'} />
        </>
    )
}

const SimpleThreeColumns = () => {
  return (
    <Box 
    p={4} 
    maxW={'6xl'}
    align={'center'}>
      <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'center'}>
            <Text color={'red.800'}>
              MOTTO
            </Text>{' '}
          </Heading>
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
  
const Halhal= () => {
    return (
      <Stack direction={{ base: 'column', md: 'row' }} maxW={'6xl'} 
      align={'center'}>
        <Flex flex={0.5}>
          <Image
            h={500}
            w={500}
            alt={'halhal Image'}
            objectFit={'cover'}
            src={"./hal-hal.svg"}
            
          />
        </Flex>
        <Flex flex={0.7} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'left'}>
              <Text color={'gray.300'}>
              Hal-hal yang harus diperhatikan
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: '1xl', md: '1xl', lg: '1xl' }} color={'gray.300'} align={'left'}>1. Bagi Mahasiswa Pelajar yang akan melaksanakan PKL/ Magang/ KKN di lingkungan Pemerintah Kota Bandung agar melengkapi rekomendasi (kesediaan menerima) dari Instansi/SKPD terkait.</Text>
            <Text fontSize={{ base: '1xl', md: '1xl', lg: '1xl' }} color={'gray.300'} align={'left'}>2. Agar melengkapi bukti telah melaksanakan Vaksinasi dosis 1 dan 2 melalui aplikasi Peduli Lindungi.</Text>
            <Text fontSize={{ base: '1xl', md: '1xl', lg: '1xl' }} color={'gray.300'} align={'left'}>3. Melampirkan Surat Dinas Terkait Khusus (PKL/ Magang/KKN/Job Training)</Text>
          </Stack>
        </Flex>
      </Stack>
    );
}

const Persyaratan= () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} maxW={'6xl'}
    align={'center'}>
      <Flex flex={0.7} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'left'}>
            <Text color={'red.800'}>
            PERSYARATAN SURAT KETERANGAN PENELITIAN/SURVEY/PRAKTEK KERJA
            </Text>{' '}
          </Heading>
          <Text color={'red.800'} align={'left'}>1. Surat Permohonan Dari Kampus/Lembaga Yang Dibubuhi Cap dan Tanda Tangan Ditujukan Kepada Yth. H. Bambang Sukardi, M.Si Kepala Badan Kesatuan Bangsa dan Politik Kota Bandung </Text>
          <Text color={'red.800'} align={'left'}>2. Fotocopy KTP, Kartu Tanda Mahasiswa atau Pelajar (1) Lembar</Text>
          <Text color={'red.800'} align={'left'}>3.  Pas Photo 3x4 Berwarna (1) Lembar</Text>
          <Text color={'red.800'} align={'left'}>4. Proposal (Bagi yang akan Melaksanakan Penelitian)</Text>
          <Text color={'red.800'} align={'left'}>5. Vaksin 1 & 2, atau 3</Text>
        </Stack>
      </Flex>
      <Flex flex={0.5}>
        <Image
          h={500}
          w={500}
          alt={'halhal Image'}
          objectFit={'cover'}
          src={"./persyaratan.svg"}
        />
      </Flex>
    </Stack>
  );
}

const Pelayanan = () => {
  const navigate = useNavigate();
  return (
    <>
      <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'center'}>
        <Text color={'gray.300'}>
          Pengajuan Surat
        </Text>
      </Heading>
      <Box p={7} align={'center'} maxW={'6xl'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} justifyItems={'center'}>
          <Box p={{ base: 7, sm: 2, md: 7 }}  h={{base:260, sm: 210, md: 240, lg: 260}} w={{base:260, sm: 210, md: 240, lg: 260}} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"} onClick={() => navigate("/penelitian")}
            _hover={{
              cursor: 'pointer',
            }}>
            <Image h={150} src={"./penelitianMini.png"} fit={"cover"} />
            <Text fontSize={{base: 'xl', sm: 'sm', md: 'xl'}} as={'b'}>Penelitian</Text>
          </Box>
          <Box p={{ base: 7, sm: 2, md: 7 }} h={{base:260, sm: 210, md: 240, lg: 260}} w={{base:260, sm: 210, md: 240, lg: 260}} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"} onClick={() => navigate("/wawancara")}
            _hover={{
              cursor: 'pointer',
            }}>
            <Image h={150} src={"./dataMini.png"} fit={"cover"} />
            <Text fontSize={{base: 'xl', sm: 'sm', md: 'xl'}} as={'b'}>Data/Wawancara</Text>
          </Box>
          <Box p={{ base: 7, sm: 2, md: 7 }} h={{base:260, sm: 210, md: 240, lg: 260}} w={{base:260, sm: 210, md: 240, lg: 260}} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"} onClick={() => navigate("/magang")}
            _hover={{
              cursor: 'pointer',
            }}>
            <Image h={150} src={"./magangMini.png"} fit={"cover"} />
            <Text fontSize={{base: 'xl', sm: 'sm', md: 'xl'}} as={'b'}>PKL/Magang/KKN</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}