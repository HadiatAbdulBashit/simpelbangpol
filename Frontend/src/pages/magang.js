import {
  Box,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
  FormControl,
  FormLabel,
  Input,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import Wave from '../components/wave';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Penelitian() {
  return (
    <>
      <Header />
      <Persyaratan />
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
        py={4}
        spacing={7}>
        <Image alt={"Hero Image"} fit={"cover"} align={"center"} h={"50vh"} src={'./pkl.png'} />
        <Text
          color={useColorModeValue('red.800', 'white')}
          fontSize={'5xl'}
          textAlign={'center'}
          fontWeight={500}>
          PKL / Magang / KKN / Pengabdian Masyarakat
        </Text>
      </Stack>
    </Container>
  );
};

const Persyaratan= () => {
  return (
    <Container maxW={'6xl'} pb={'60px'}>
      <Stack
        as={Box}
        align={'center'}
        py={4}
        p={'5'}
        spacing={'3'}>
        <Text
          color={'grey.400'}
          fontSize={{ base: '1xl', md: '3xl', lg: '1xl' }}
          textAlign={'center'}
          fontWeight={500}
          as='b'
          >
          Persyaratan Surat Keterangan Magang/PKL/KKN
        </Text>
        <Text color={'grey.300'}>1. Surat Permohonan Dari Kampus/Lembaga Yang Dibubuhi Cap dan Tanda Tangan Ditujukan Kepada</Text>
          <Text as='b' color={'grey.300'}>Yth. Kepala Badan Kesatuan Bangsa dan Politik Kota Bandung </Text>
          <Text align={'left'}>2. Melampirkan Surat Dinas Yang Dibubuhi Cap dan Tanda Tangan atas dasar kesediaan menerima dari Instansi/SKPD Tujuan. </Text>
          <Text align={'left'}>3. Fotocopy KTP, Kartu Tanda Mahasiswa atau Pelajar</Text>
          <Text align={'left'}>4. Pas Photo 3x4 Berwarna</Text>
          <Text align={'left'}>5. Vaksin 1 & 2, atau 3</Text>
          </Stack>
      </Container>
    );
  } 


const FormPengajuan = () => {
  function readFileKTP() {
    let file_ktp = document.getElementById('attach_ktp').files[0];

    var reader_ktp = new FileReader();

    reader_ktp.readAsDataURL(file_ktp);

    reader_ktp.onload = function () {
      document.getElementById('fileContent_ktp').value = reader_ktp.result;
      document.getElementById('filename_ktp').value = file_ktp.name;
      // console.log(document.getElementById('fileContent_ktp').value)
    };
  }

  function readFileKTM() {
    let file_ktm = document.getElementById('attach_ktm').files[0];

    var reader_ktm = new FileReader();

    reader_ktm.readAsDataURL(file_ktm);

    reader_ktm.onload = function () {
      document.getElementById('fileContent_ktm').value = reader_ktm.result;
      document.getElementById('filename_ktm').value = file_ktm.name;
      // console.log(document.getElementById('fileContent_ktm').value)
    };
  }

  function readFileDataDiri() {
    let file_dataDiri = document.getElementById('attach_dataDiri').files[0];

    var reader_dataDiri = new FileReader();

    reader_dataDiri.readAsDataURL(file_dataDiri);

    reader_dataDiri.onload = function () {
      document.getElementById('fileContent_dataDiri').value = reader_dataDiri.result;
      document.getElementById('filename_dataDiri').value = file_dataDiri.name;
      // console.log(document.getElementById('filename_dataDiri').value)
    };
  }

  function readFileSuratKampus() {
    let file_suratKampus = document.getElementById('attach_suratKampus').files[0];

    var reader_suratKampus = new FileReader();

    reader_suratKampus.readAsDataURL(file_suratKampus);

    reader_suratKampus.onload = function () {
      document.getElementById('fileContent_suratKampus').value = reader_suratKampus.result;
      document.getElementById('filename_suratKampus').value = file_suratKampus.name;
      // console.log(document.getElementById('filename_suratKampus').value)
    };
  }

  function readFileVaksin() {
    let file_vaksin = document.getElementById('attach_vaksin').files[0];

    var reader_vaksin = new FileReader();

    reader_vaksin.readAsDataURL(file_vaksin);

    reader_vaksin.onload = function () {
      document.getElementById('fileContent_vaksin').value = reader_vaksin.result;
      document.getElementById('filename_vaksin').value = file_vaksin.name;
      // console.log(document.getElementById('filename_vaksin').value)
    };
  }
  function readFileProposal() {
    let file_proposal = document.getElementById('attach_proposal').files[0];

    var reader_proposal = new FileReader();

    reader_proposal.readAsDataURL(file_proposal);

    reader_proposal.onload = function () {
      document.getElementById('fileContent_proposal').value = reader_proposal.result;
      document.getElementById('filename_proposal').value = file_proposal.name;
      // console.log(document.getElementById('filename_proposal').value)
    };
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwerZePKagAHByUxMpUHdvBiEK0FmoYwC7-sacEGegIi8EArffACNN9B7Fn4uq55gEh/exec'

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('tombolKirim').style.display = "none";
    document.getElementById('tombolLoading').style.display = "flex";
    fetch(scriptURL, { method: 'POST', body: new FormData(document.getElementById('uploadForm')) })
      .then(response => {
        console.log('Success!', response)
        document.getElementById('uploadForm').style.display = "none";
        document.getElementById('berhasilHore').style.display = "flex";
        document.getElementById('tombolLoading').style.display = "none";
      })
      .catch(error => console.error('Error!', error.message))

    // 
  }
  return (
    <Container
      maxW={'3xl'}
      color={'white'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'5xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Text fontSize={'lg'}>
            Pengajuan Surat
          </Text>
          <Text fontSize={'4xl'} textAlign={'center'} as={'b'} color={'gray.100'}>
          PKL / Magang / KKN / Pengabdian Masyarakat
          </Text>
        </Stack>
        <Box
          p={3}>
          <Stack spacing={4}>
            <form id="uploadForm" onSubmit={handleSubmit} name="pelayanan_penelitian">

              <input type="hidden" value="" name="fileContent_ktp" id="fileContent_ktp" />
              <input type="hidden" value="" name="filename_ktp" id="filename_ktp" />

              <input type="hidden" value="" name="fileContent_ktm" id="fileContent_ktm" />
              <input type="hidden" value="" name="filename_ktm" id="filename_ktm" />

              <input type="hidden" value="" name="fileContent_dataDiri" id="fileContent_dataDiri" />
              <input type="hidden" value="" name="filename_dataDiri" id="filename_dataDiri" />

              <input type="hidden" value="" name="fileContent_suratKampus" id="fileContent_suratKampus" />
              <input type="hidden" value="" name="filename_suratKampus" id="filename_suratKampus" />

              <input type="hidden" value="" name="fileContent_vaksin" id="fileContent_vaksin" />
              <input type="hidden" value="" name="filename_vaksin" id="filename_vaksin" />

              <input type="hidden" value="" name="fileContent_proposal" id="fileContent_proposal" />
              <input type="hidden" value="" name="filename_proposal" id="filename_proposal" />
              <FormControl id="nama" isRequired align={'left'} py={'2'} >
                <FormLabel>Nama Lengkap</FormLabel>
                <Input id="nama" name="nama" type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="judulPenelitian" isRequired align={'left'} py={'2'} >
                <FormLabel>Alamat</FormLabel>
                <Input id="alamat" name='alamat' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="noWhatsapp" isRequired align={'left'} py={'2'} >
                <FormLabel>Jenis Nomor Identitas</FormLabel>
                <Select icon={<ChevronDownIcon color='#67282A' />} id="jenis_no_identitas" name='jenis_no_identitas' variant={'filled'} color={'black'} >
                  <option value='NIK'>NIK</option>
                  <option value='NIM'>NIM</option>
                  <option value='NPM'>NPM</option>
                  <option value='NRP'>NRP</option>
                  <option value='NRP'>NIP</option>
                </Select>
              </FormControl>
              <FormControl id="kptKartuPelajar" isRequired align={'left'} py={'2'} >
                <FormLabel>Nomor Identitas</FormLabel>
                <Input id="no_identitas" name='no_identitas' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="ktm" isRequired align={'left'} py={'2'} >
                <FormLabel>Tujuan Dinas</FormLabel>
                <Input id="tujuan_dinas" name='tujuan_dinas' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="setifikatVaksin" isRequired align={'left'} py={'2'} >
                <FormLabel>Anggota</FormLabel>
                <Input id="anggota" name='anggota' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="suratKampus" isRequired align={'left'} py={'2'} >
                <FormLabel>Jabatan</FormLabel>
                <Select icon={<ChevronDownIcon color='#67282A' />} id="jabatan" name='jabatan' variant={'filled'} color={'black'} >
                  <option value=' '>-- Jika tidak ada Anggota silakan pilih ini --</option>
                  <option value='Ketua Kelompok'>Ketua Kelompok</option>
                  <option value='Koordinator'>Koordinator</option>
                  <option value='Penanggung Jawab'>Penanggung Jawab</option>
                </Select>
              </FormControl>
              <FormControl id="proposalPenelitian" isRequired align={'left'} py={'2'} >
                <FormLabel>Nama Kampus</FormLabel>
                <Input id="nama_kampus" name='nama_kampus' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="dataDiri" isRequired align={'left'} py={'2'} >
                <FormLabel>No Surat Kampus</FormLabel>
                <Input id="no_surat_kampus" name='no_surat_kampus' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="dataDiri" isRequired align={'left'} py={'2'} >
                <FormLabel>Tanggal Surat Kampus</FormLabel>
                <Input variant={'filled'} color={'black'} _focus={{ color: 'white' }} id="tanggal_surat_kampus" name='tanggal_surat_kampus' placeholder="Select Date and Time" size="md" type="date" />
              </FormControl>
              <FormControl id="dataDiri" isRequired align={'left'} py={'2'} >
                <FormLabel>No Whatsapp</FormLabel>
                <Input id="no_hp" name='no_hp' type="text" variant={'filled'} color={'black'} _focus={{ color: 'white' }} />
              </FormControl>
              <FormControl id="dataDiri" isRequired align={'left'} py={'2'} >
                <FormLabel>Tanggal Mulai Pelaksanaan</FormLabel>
                <Input variant={'filled'} color={'black'} _focus={{ color: 'white' }} id="tanggal_surat_kampus" name='tanggal_surat_kampus' placeholder="Select Date and Time" size="md" type="date" />
              </FormControl>
              <FormControl id="dataDiri" isRequired align={'left'} py={'2'} >
                <FormLabel>Tanggal Akhir Pelaksanaan</FormLabel>
                <Input variant={'filled'} color={'black'} _focus={{ color: 'white' }} id="tanggal_surat_kampus" name='tanggal_surat_kampus' placeholder="Select Date and Time" size="md" type="date" />
              </FormControl>
              <Stack
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1}>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>KTP</FormLabel>
                    <Input type="file" id='attach_ktp' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileKTP} />
                  </FormControl>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>KTM</FormLabel>
                    <Input type="file" id='attach_ktm' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileKTM} />
                  </FormControl>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>Pas Foto (3x4)</FormLabel>
                    <Input type="file" id='attach_dataDiri' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileDataDiri} />
                  </FormControl>
                </Stack>
                <Stack flex={1}>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>Surat Kampus</FormLabel>
                    <Input type="file" id='attach_suratKampus' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileSuratKampus} />
                  </FormControl>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>Vaksin</FormLabel>
                    <Input type="file" id='attach_vaksin' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileVaksin} />
                  </FormControl>
                  <FormControl isRequired align={'left'} py={'2'} >
                    <FormLabel>Surat Dinas Terkait</FormLabel>
                    <Input type="file" id='attach_proposal' variant={'unstyled'} _focus={{ color: 'white' }} onChange={readFileProposal} />
                  </FormControl>
                </Stack>
              </Stack>
              <Stack py={'5'} >
                <Button
                  id='tombolKirim'
                  type='submit'
                  _hover={{
                    bg: 'gray.400',
                  }}
                  size="lg"
                  bg={'gray.100'}
                  color={'#67282A'}>
                  Kirim
                </Button>
                <Button
                  isLoading
                  id='tombolLoading'
                  loadingText='Submitting'
                  display={'none'}
                  size="lg"
                  bg={'gray.100'}
                  color={'#67282A'}>
                </Button>
              </Stack>
            </form>
            <Alert
              id='berhasilHore'
              status='success'
              variant='subtle'
              rounded={'md'}
              py={'50'}
              display={'none'}
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              bgColor={'gray.100'}
              textAlign='center'
              color={'black'}>
              <AlertIcon boxSize='40px' mr={0} color={'#67282A'} />
              <AlertTitle mt={4} mb={8} fontSize='lg' color={'#67282A'} >
                Surat Pengajuan berhasil dikirim!
              </AlertTitle>
              <AlertDescription maxWidth='sm' color={'#67282A'}>
                Realisasi penerbitan paling lambat adalah hari yang sama dengan toleransi maksimal 1 (satu) hari kerja
              </AlertDescription>
              <AlertDescription maxWidth='sm' mt={4} color={'#67282A'}>
                Apabila administrasi tidak lengkap, akan ada keterlambatan untuk penerbitan surat keterangan !!!
              </AlertDescription>
              <AlertDescription fontSize='lg' mt={9} fontWeight={500} color={'#67282A'}>
                Note
              </AlertDescription>
              <AlertDescription maxWidth='sm' mt={4} color={'#67282A'}>
                Admin kami akan menghubungi, setelah suratnya selesai 😊
              </AlertDescription>
            </Alert>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};