import React from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  IconButton,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import nav_logo from "../assets/images/nav_logo.png";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={8}>
    <Box bg="#bc2613" px={8}>
      <Flex h={"4rem"} alignItems={"center"} justifyContent={"space-between"}>
        {/* <Heading as="h1" size="lg">Hostel HLV</Heading> */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <img src={nav_logo} alt="Logo" style={{ height: "4rem" }} />
        </Link>

        <Flex alignItems={"center"}>
          {/* Menu para dispositivos móveis */}
          {/* <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} display={{ md: 'none' }} />
            <MenuList>
              <MenuItem as={Link} href="/">Home</MenuItem>
              <MenuItem as={Link} href="/tours">Tours</MenuItem>
              <MenuItem as={Link} href="/about-us">About Us</MenuItem>
              <MenuItem as={Link} href="/contact">Contact</MenuItem> */}
          {/* Adicione mais items de menu conforme necessário */}
          {/* </MenuList>
          </Menu> */}
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon color="white" />} // Set the icon color to white
              display={{ md: "none" }}
              borderRadius="md" // Set border radius
              borderWidth="1px" // Set border width
              borderColor="white" // Set border color
              bg="#bc2613" // Set background color to red
              _hover={{ bg: "#a92e1e" }} // Change background color on hover
            />
            <MenuList>
              <MenuItem as={Link} href="/">
                Home
              </MenuItem>
              <MenuItem as={Link} href="/tours">
                Tours
              </MenuItem>
              <MenuItem as={Link} href="/about-us">
                About Us
              </MenuItem>
              <MenuItem as={Link} href="/contact">
                Contact
              </MenuItem>
              {/* Adicione mais items de menu conforme necessário */}
            </MenuList>
          </Menu>

          {/* Links para telas maiores */}
          <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
            <Link href="/" marginRight={4}>
              Home
            </Link>
            <Link href="/tours" marginRight={4}>
              Tours
            </Link>
            <Link href="/about-us" marginRight={4}>
              About Us
            </Link>
            <Link href="/contact">Contact</Link>
            {/* Adicione mais links conforme necessário */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
