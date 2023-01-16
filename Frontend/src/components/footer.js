import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaPhone, FaYoutube, FaGlobe } from 'react-icons/fa';

const Logo = (props: any) => {
  return (
    <Box>
      <Box textAlign={'left'}>
        <Text fontSize={'xl'} as={'b'}>
          BAKESBANGPOL
        </Text>
        <Text>
          Pelayanan
        </Text>
      </Box>
      <Image alt={"Hero Image"} fit={"cover"} align={"center"} h={"130px"} src={'./logo nav.png'} />
    </Box>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('#1B1717', 'gray.900')}
      color={useColorModeValue('#FFFFFF', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'} align={'left'}>
              Copyright @kesbangpolpelayanan 2022
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Sitemap</Text>
            <Link href={'#'}>Beranda</Link>
            <Link href={'#'}>Pelayanan</Link>
            <Link href={'#'}>FAQ</Link>
          </Stack>
          <Stack 
            align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Contact Us</Text>
              <Link 
                href={'https://wa.me/6287824875932'}
                target={'_blank'}
                _hover={{ 
                  textDecoration: 'none' }}>
                <Button
                left={'-16px'}
                  height="44px"
                  variant="ghost"
                  color="#DCE2FF"
                  border={'2px solid transparent'}
                  _hover={{ 
                    border: '2px solid #D8B6A4',
                    textDecoration: 'none' }}
                  leftIcon={<FaPhone color="#D8B6A4" size="20px" />}>
                  0878 2487 5932  - Brury
                </Button>
              </Link>
              <Link 
                href={'https://wa.me/6281222515212'}
                target={'_blank'}
                _hover={{ 
                  textDecoration: 'none' }}>
                <Button
                  height="44px"
                  left={'-16px'}
                  variant="ghost"
                  color="#DCE2FF"
                  border={'2px solid transparent'}
                  _hover={{ 
                    border: '2px solid #D8B6A4',
                    textDecoration: 'none' }}
                  leftIcon={<FaPhone color="#D8B6A4" size="20px" />}>
                  0812 2251 5212  - Andy
                </Button>
              </Link>
              <Stack direction={'row'} spacing={6} py={5} alignItems={'center'}>
                <Link href={'https://portal.kesbangpol.bandung.go.id'} target={'_blank'}>
                  <FaGlobe 
                  color={'#D8B6A4'}
                  size="25px"/>
                </Link>
                <Link href={'https://www.youtube.com/@badankesbangpolkotabandung7271'} target={'_blank'}>
                  <FaYoutube 
                  color={'#D8B6A4'}
                  size="25px"/>
                </Link>
                <Link href={'https://www.instagram.com/bakesbangpolkotabandung'} target={'_blank'}>
                  <FaInstagram 
                  color={'#D8B6A4'}
                  size="25px"/>
                </Link>
              </Stack>
          </Stack>
          <Stack align={'flex-start'} >
            <MapsKesbang />
            <Text fontSize={'sm'} align={'left'}>
              Jl. Wastukencana, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function MapsKesbang() {
  return (
    <iframe title='Alamat Kesbangpol' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.834065572113!2d107.60714001427564!3d-6.91043526955123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e63a6d8df397%3A0xa78857f0be375298!2sKesbangpol%20Kota%20Bandung!5e0!3m2!1sid!2sid!4v1673612753824!5m2!1sid!2sid" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  );
}