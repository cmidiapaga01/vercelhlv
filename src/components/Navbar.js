import React from 'react';
import {
  Box, Flex, Link, Stack, Heading, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Switch as ChakraSwitch } from '@chakra-ui/react'; // Renomeado para evitar conflitos

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading as="h1" size="lg">Hostel HLV</Heading>

        <Flex alignItems={'center'}>
          {/* Menu para dispositivos móveis */}
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} display={{ md: 'none' }} />
            <MenuList>
              <MenuItem as={Link} href="/">Home</MenuItem>
              <MenuItem as={Link} href="/tours">Tours</MenuItem>
              <MenuItem as={Link} href="/about-us">About Us</MenuItem>
              <MenuItem as={Link} href="/contact">Contact</MenuItem>
              {/* Adicione mais items de menu conforme necessário */}
            </MenuList>
          </Menu>

          {/* Links normais para telas maiores */}
          <Stack direction={'row'} spacing={7} display={{ base: 'none', md: 'flex' }}>
            <Link href="/">Home</Link>
            <Link href="/tours">Tours</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact">Contact</Link>
            {/* Adicione mais links conforme necessário */}
          </Stack>

          {/* Switch para alternar temas */}
          <ChakraSwitch isChecked={colorMode === 'dark'} onChange={toggleColorMode} ml={5} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
