// 'use client'

import '../styles/Home.module.css';

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                justifyContent={'space-between'}
                gap={10}
                align={'center'}>

                <Flex
                    ml={{ base: -2 }}
                    display={['flex', 'flex', 'flex', 'none']}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />

                    <Flex fontFamily={"inherit"} fontSize={"20px"} color={"black"} fontStyle={"none"} fontWeight={"bold"} >
                        𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒
                    </Flex>
                </Flex>

                <Flex display={['none', 'none', 'none', 'flex']} justifyContent={"center"} alignItems={"center"} ml={0}>
                    <Flex fontFamily={"inherit"} color={"black"} mr={5} fontSize={"20px"} fontStyle={"none"} fontWeight={"bold"} display={['block', 'block', 'block', "block", 'none']} >
                        𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒
                    </Flex>
                    <DesktopNav />
                </Flex>

                <Flex fontFamily={"inherit"} color={"black"} fontSize={"20px"} fontStyle={"none"} fontWeight={"bold"} display={['none', 'none', 'none', 'none', "block"]} >
                    𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={"bold"} variant={'link'} href={'#'} color={"black"}>
                        Log in
                    </Button>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={["white", "white", "white", "white", 'black']}
                        bg={["black", "black", "black", "black", '#f5f3ef']}
                        href={'#'}
                        _hover={{
                            bg: 'black',
                            color: "white"
                        }} colorScheme={{ base: 'black' }}>
                        Sign up
                    </Button>
                    <Button as={'a'} padding={"10px"} display={['none', 'none', 'none', "none", 'flex']} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} bg={'black'} _hover={{
                        bg: 'grey',
                    }} color={"white"}>
                        Hire Creatives
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                // p={2}
                                href={navItem.href ?? '#'}
                                fontSize={"14px"}
                                lineHeight={"14px"}
                                fontWeight={"bold"}
                                color={"black"}
                                ml={2}
                                mr={2}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
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
    )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <>
            <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={['flex', 'flex', 'flex', 'none']}>
                {NAV_ITEMS.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                ))}
                <Divider />
                <Text
                    fontFamily="sans-serif"
                    style={{
                        animation: 'slideInFromLeft 0.7s ease-out',
                    }}
                    fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {"Log in"}
                </Text>
            </Stack>

        </>

    )
}

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontFamily="sans-serif"
                    style={{
                        animation: 'slideInFromLeft 0.7s ease-out',
                    }}
                    fontWeight={600} color={useColorModeValue('black', 'black')}>
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
            </Box>

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
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>

        </Stack>
    )
}

const NAV_ITEMS = [
    {
        label: 'Find talent',
        href: '#',
    },
    {
        label: 'Find Work',
        href: '#',
    },
    {
        label: 'Inspiration',
        href: '#',
    },
    {
        label: 'Learn design',
        href: '#',
    },
    {
        label: 'Go Pro',
        href: '#',
    },
]

