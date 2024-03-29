import React from "react";
import { Box, Flex, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useSpring, animated } from "react-spring";

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

  // Define animation for social media icons
  const socialMediaAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  // Define animation for "Explore Now" button
  const exploreButtonAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  // Define animation for logo
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000, delay: 500 },
  });

  // Define animation for three buttons in a row
  const buttonsAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 1000 },
  });

  return (
    <Box
      minH="calc(100vh - 10rem)"
      bg="#bc2613"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Container for content */}
      <Flex
        justifyContent="center"
        textAlign="center"
        direction="column"
        position="relative"
        width="100%"
        maxWidth={{ base: "75%", md: "75%", lg: "70%", xl: "60%" }}
      >
        {/* Social media icons */}
        <animated.div style={socialMediaAnimation}>
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
        </animated.div>
        {/* "Explore Now" button styled with Chakra UI */}
        <ChakraFlex justifyContent="center" width="100%">
          {" "}
          {/* Horizontally center the button */}
          <ChakraButton
            size="lg"
            mb={4}
            {...buttonStyle}
            fontSize="lg"
            width="11rem"
          >
            Book Now
          </ChakraButton>
        </ChakraFlex>
        {/* Logo */}
        <animated.div style={logoAnimation}>
          <Box mb={4}>
            <Image src={logo} alt="Logo" w="17rem" h="auto" mx="auto" />
          </Box>
        </animated.div>
        {/* Three buttons in a row styled with Chakra UI */}
        <ChakraFlex justifyContent="center" mb={4}>
          <ChakraButton mr={2} {...buttonStyle}>
            Tours
          </ChakraButton>
          <ChakraButton mr={2} {...buttonStyle}>
            About us
          </ChakraButton>
          <ChakraButton {...buttonStyle}>FAQ</ChakraButton>
        </ChakraFlex>
      </Flex>
    </Box>
  );
}

export default HeroSection;
