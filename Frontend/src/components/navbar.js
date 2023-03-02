import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  ButtonProps,
  useColorMode,
} from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const ColorModeToggle = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="center" alignItems="center" paddingX={3}>
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        h="40px"
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
}

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      bg={useColorModeValue('#D9D9D9', 'gray.900')}
      color={useColorModeValue('gray.600', 'white')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      position={'sticky'}
      top={0}
      zIndex={2}
      align={'center'}>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        maxW={'6xl'}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'right', md: 'start' }}>
          <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"50px"} h={"50px"} src={'./logo.png'} onClick={() => {
            navigate("/");
            goToTop();
          }}
          _hover={{
            cursor: 'pointer'
          }}/>
          <Box textAlign={'left'} px={2} onClick={() => {
            navigate("/");
            goToTop();
          }}
          _hover={{
            cursor: 'pointer'
          }}>
            <Text fontSize={'xl'} as={'b'}>
              BAKESBANGPOL
            </Text>
            <Text fontSize={'sm'} alignItems={'start'}>
              Pelayanan
            </Text>
          </Box>
        </Flex>
        <Flex
          display={{ base: 'none', md: 'flex' }}>
          <DesktopNav />
        </Flex>
        <Flex>
          <ColorModeToggle />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Stack direction={'row'} transition={'all .3s ease'} >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          px={3}
          fontWeight={600}
          _hover={{
            color: linkHoverColor,
          }}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                to={navItem.href ?? '#'}
                fontSize={'sm'}
                color={linkColor}
                onClick={goToTop}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={5}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={5}
      onClick={goToTop}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.200', 'gray.900') }}>
      <Stack direction={'row'} align={'right'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#67282A' }}
            textAlign={'left'}
            fontWeight={500}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'right'}
          flex={1}>
          <Icon color={'#67282A'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={href ?? '#'}
        onClick={goToTop}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                onClick={goToTop}
                to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Beranda',
    href: '/',
  },
  {
    label: 'Pelayanan',
    children: [
      {
        label: 'Penelitian',
        href: '/penelitian',
      },
      {
        label: 'Data dan Wawancara',
        href: '/wawancara',
      },
      {
        label: 'PKL / Magang / KKN',
        href: '/magang',
      },
    ],
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
];