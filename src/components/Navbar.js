import React from 'react';
import {
  Box, Flex, Link, Heading, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={8}>
      <Flex h={"4rem"} alignItems={'center'} justifyContent={'space-between'}> 
        <Heading as="h1" size="lg">Hostel HLV</Heading>

        <Flex alignItems={'center'}>
          {/* Menu para dispositivos móveis */}
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} display={{ md: 'none' }} />
            <MenuList>
              <MenuItem as={Link} href="/">Home</MenuItem>
              {/* <MenuItem as={Link} href="/about-us">About Us</MenuItem> */}
              <MenuItem as={Link} href="/tourspage">Tours</MenuItem>
              {/* Adicione mais items de menu conforme necessário */}
            </MenuList>
          </Menu>
          
          {/* Links para telas maiores */}
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Link href="/" marginRight={4}>Home</Link>
            <Link href="/tourspage" marginRight={4}>Tours</Link>
            {/* <Link href="/about-us" marginRight={4}>About Us</Link>
            <Link href="/contact">Contact</Link> */}
            {/* Adicione mais links conforme necessário */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
