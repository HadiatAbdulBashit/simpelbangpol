import {
    Heading,
    Text,
    Stack,
    Image,
    Flex
  } from "@chakra-ui/react";
  
  export default function Faq() {
    return (
    <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={0.5}>
        <Image
            w={500} 
            h={500}
            align={"center"}
            src={"./faq.svg"}
        />
        </Flex>
        <Flex flex={0.7} align={'center'} justify={'center'} alignItems={'center'}>
        <Stack spacing={3} alignItems={'flex-start'}>
              <br></br><Heading fontSize={"2xl"}>
                <Text as={"span"} color={"red.800"}>
                  1. Untuk mengajukan surat penelitian, apakah harus melampirkan proposal?
                </Text>
              </Heading>
              <Text color={"black.500"}>
                Harus, dan jangan lupa untuk melampirkan judul penelitian didalam proposalnya.
              </Text>
              <Heading fontSize={"2xl"}>
                <Text as={"span"} color={"red.800"}>
                  2. Apa itu surat dinas?
                </Text>
              </Heading>
              <Text color={"black.500"}>
                Surat dinas adalah surat tanda diterima yang dikeluarkan dari tempat PKL/Magang yang dituju.
              </Text>
              <Heading fontSize={"2xl"}>
                <Text as={"span"} color={"red.800"}>
                  3. Apakah ada biaya untuk pembuatan suratnya?
                </Text>
              </Heading>
              <Text color={"black.500"}>
                tidak ada biaya sepeserpun, gratis.
              </Text>
              <Heading fontSize={"2xl"}>
                <Text as={"span"} color={"red.800"}>
                4. pada waktu apa saja Bakesbangpol beroprasi?
                </Text>
              </Heading>
              <Text color={"black.500"}>
              setiap hari senin-jumat pada jam 08.00 - 15.00 *kecuali hari libur nasional
              </Text>
              <Heading fontSize={"2xl"}>
              <Text as={"span"} color={"red.800"}>
                5. apakah bisa membuat surat untuk kedinasan Jawa Barat yang kantornya berlokasi di Kota Bandung?
                </Text>
              </Heading>
              <Text color={"black.500"}>
              tidak bisa, silahkan menghubungi ke Bakesbangpol Jawa Barat ya
              </Text>
            <br></br>
              <Note />
            </Stack>
        </Flex>
      </Stack>
      
    )
}

const Note = () => {
  return (
    <Flex py={"8"} align={'center'} justify={'center'} boxShadow="2xl" w={"container.md"} rounded={"lg"}>
        <Stack spacing={5} alignItems={"center"}>
              <Heading fontSize={"1xl"}>
                <Text as={"span"} color={"red.800"}>
                  Catatan!!
                </Text>
              </Heading>
              <Text color={"black.500"}>
                jika ada pertanyaan lebih lanjut, silahkan hubungi kami di contact person yaa!
              </Text>
        </Stack>
    </Flex>
  );
}
