import {
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";

export default function Faq() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      m={'auto'}
      maxW={'6xl'}
      pt={{ base: 5, md: 8 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Image
            w={500}
            h={500}
            align={"center"}
            src={"./faq.svg"}/>
      </Stack>
      <Flex
        flex={2}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Stack spacing={3} alignItems={'flex-start'} 
      p={{ base: 8, md: 0 }}>
          <Heading fontSize={"2xl"}>
            <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
              1. Untuk mengajukan surat penelitian, apakah harus melampirkan proposal?
            </Text>
          </Heading>
          <Text color={"black.500"}>
            Harus, dan jangan lupa untuk melampirkan judul penelitian didalam proposalnya.
          </Text>
          <Heading fontSize={"2xl"}>
            <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
              2. Apa itu surat dinas?
            </Text>
          </Heading>
          <Text color={"black.500"}>
            Surat dinas adalah surat tanda diterima yang dikeluarkan dari tempat PKL/Magang yang dituju.
          </Text>
          <Heading fontSize={"2xl"}>
            <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
              3. Apakah ada biaya untuk pembuatan suratnya?
            </Text>
          </Heading>
          <Text color={"black.500"}>
            Tidak ada biaya sepeserpun, Gratis.
          </Text>
          <Heading fontSize={"2xl"}>
            <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
              4. Pada waktu apa saja Bakesbangpol beroprasi?
            </Text>
          </Heading>
          <Text color={"black.500"}>
            Setiap hari Senin-Jumat pada jam 08.00 - 15.00 *kecuali hari libur nasional
          </Text>
          <Heading fontSize={"2xl"}>
            <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
              5. Apakah bisa membuat surat untuk kedinasan Jawa Barat yang kantornya berlokasi di Kota Bandung?
            </Text>
          </Heading>
          <Text color={"black.500"} pb={5}>
            Tidak bisa, silahkan menghubungi ke Bakesbangpol Jawa Barat ya
          </Text>
          <Note />
        </Stack>
      </Flex>
    </Stack>
  )
}

const Note = () => {
  return (
    <Flex p={"8"} align={'center'} justify={'center'} boxShadow="2xl" width={'100%'} rounded={"lg"} backgroundColor={useColorModeValue('white', 'blackAlpha.500')}>
      <Stack spacing={5} alignItems={"center"}>
        <Heading fontSize={"2xl"}>
          <Text as={"span"} color={useColorModeValue('red.800', 'white')}>
            Catatan!!
          </Text>
        </Heading>
        <Text color={"black.500"}>
          Jika ada pertanyaan lebih lanjut, silahkan hubungi kami di contact person yaa!
        </Text>
      </Stack>
    </Flex>
  );
}