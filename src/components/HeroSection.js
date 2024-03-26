import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.png";

// Importing Chakra UI button style
import { Button as ChakraButton, Flex as ChakraFlex } from "@chakra-ui/react";

function HeroSection() {
  // Define the common button style
  const buttonStyle = {
    colorScheme: "whiteAlpha",
    px: 4,
    fontSize: "sm",
    rounded: "full",
    bg: "#d2af15", // HEX color code for background color
    color: "#FFFFFF", // HEX color code for text color
    boxShadow:
      "0px 1px 25px -5px rgb(205 137 24 / 48%), 0 10px 10px -5px rgb(205 137 24 / 43%)",
    _hover: { bg: "#c49a0d" }, // HEX color code for hover background color
    _focus: { bg: "#c49a0d" }, // HEX color code for focus background color
  };

  // Define the common icon style
  const iconStyle = {
    colorScheme: "whiteAlpha",
    borderRadius: "full", // Make the button circular
    _hover: { bg: "#314e89" }, // Set hover background color
  };

  return (
    <Box
      minH="calc(100vh - 12rem)"
      bg="#af3838"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Container for content */}
      <Flex textAlign="center" direction="column" position="relative" 
      width="100%" maxWidth={{ base: "75%", md: "75%", lg: "70%", xl: "60%" }}>
        {/* Social media icons */}
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          mb={{ base: 4, md: 0 }}
          position="absolute"
          left={-5}
          top="43%"
        >
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            {...iconStyle} // Apply common icon style
            bg="#3b5998" // Set the background color using HEX
            mb={2}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            {...iconStyle} // Apply common icon style
            bg="#00acee" // Set the background color using HEX
            mb={2}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            {...iconStyle} // Apply common icon style
            bgGradient="linear(to-r, #405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d,#f56040,#f77737,#fcaf45,#ffdc80)" // Set background gradient using HEX colors
            mb={2}
          />
        </Flex>
        {/* "Explore Now" button styled with Chakra UI */}
        <ChakraButton size="lg" mb={4} {...buttonStyle} fontSize="lg">
          Book Now
        </ChakraButton>
        {/* Logo */}
        <Box mb={4}>
          <Image src={logo} alt="Logo" w="17rem" h="auto" mx="auto" />
        </Box>
        {/* Three buttons in a row styled with Chakra UI */}
        <ChakraFlex justifyContent="space-between" mb={4}>
          <ChakraButton {...buttonStyle}>Button 1</ChakraButton>
          <ChakraButton {...buttonStyle}>Button 2</ChakraButton>
          <ChakraButton {...buttonStyle}>Button 3</ChakraButton>
        </ChakraFlex>
      </Flex>
    </Box>
  );
}

export default HeroSection;
