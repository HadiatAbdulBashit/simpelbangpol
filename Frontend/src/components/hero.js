import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack direction={{ base: 'column', md: 'row' }} maxW={'6xl'} align={'center'}>
        <Flex flex={0.7} justify={'center'} align={'center'} position={'relative'}>
          <Stack p={'5'} spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }} align={'left'}>
              <Text color={'red.800'}>
                Selamat Datang di SIMPEL BANGPOL
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: '1xl', md: '1xl', lg: '1xl' }} color={'gray.500'} align={'left'}>
            SIMPEL BANGPOL (Sistem Informasi Pelayanan Bangsa dan Politik) akan membantu
            akang, teteh untuk pembuatan surat rekomendasi pelaksanaan penelitian, observasi,
            pkl, magang, kkn, dan lain-lain.
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

