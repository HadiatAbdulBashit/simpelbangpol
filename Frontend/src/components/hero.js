import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack direction={{ base: 'column', md: 'row' }} maxW={'6xl'} align={'center'}>
        <Flex flex={0.7} justify={'center'} align={'center'} position={'relative'}>
          <Stack p={'5'} spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'left'}>
              <Text color={useColorModeValue('red.800', 'white')}>
                Selamat Datang di SIMPEL BANGPOL Kota Bandung
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: '1xl', md: '1xl', lg: '1xl' }} color={'gray.500'} align={'left'}>
            SIMPEL BANGPOL (Sistem Informasi Pelayanan Badan Kesatuan Bangsa dan Politik Kota Bandung) akan membantu
            akang, teteh untuk pembuatan surat rekomendasi pelaksanaan Penelitian, Observasi,
            PKL, Magang, KKN, dan Lain-lain.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={0.5}>
          <Image
            alt={'sibangpol Image'}
            objectFit={'cover'}
            src={"./sibangpol.png"}
          />
        </Flex>
      </Stack>
    );
  }

