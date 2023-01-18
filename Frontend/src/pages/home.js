import Hero from "../components/hero";

import { Box, SimpleGrid, Image, Text, Heading, Stack, Flex } from '@chakra-ui/react';

export default function Home(){
    return (
        <Flex align={'center'} direction={'column'}>
        <Hero />
        <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'center'}>
              <Text color={'red.800'}>
                MOTTO
              </Text>{' '}
        </Heading>
        <SimpleThreeColumns />
        <Halhal />
        <Persyaratan />
        <Pelayanan />
        </Flex>
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
  
const Halhal= () => {
    return (
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={0.5}>
          <Image
            h={500}
            w={500}
            alt={'halhal Image'}
            objectFit={'cover'}
            src={"./halhal.svg"}
            
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
    <Stack direction={{ base: 'column', md: 'row' }}>
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
  return (
    <Box p={4} align={'center'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={120}>
        <Box h={260} w={260} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"}>
            <Image
                w={200} 
                h={200}
                src={"./penelitianMini.png"}
            />
            <Text fontSize={'xl'} as={'b'}>Penelitian</Text>
        </Box>
        <Box h={260} w={260} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"}>
            <Image
                src={"./dataMini.png"}
            />
            <Text fontSize={'xl'} as={'b'}>Data/Wawancara</Text>
        </Box>
        <Box h={260} w={260} align={'center'} justify={'center'} bgColor={"gray.100"} rounded={"40"}>
            <Image
                w={200} 
                h={200}
                src={"./magangMini.png"}
            />
            <Text fontSize={'xl'} as={'b'}>PKL/Magang/KKN</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}