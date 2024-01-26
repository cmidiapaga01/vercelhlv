import React from 'react';
import { Box, VStack, Text, HStack, Link, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.800')} color={useColorModeValue('gray.600', 'gray.200')}>
      <VStack spacing={4} align="stretch" p={8}>
        <Text fontSize="lg" textAlign="center">
          Hotel Foda - Conforto e Luxo em um só lugar
        </Text>
        <HStack justifyContent="center">
          <Link href="https://www.facebook.com/" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          </Link>
          <Link href="https://www.twitter.com/" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          </Link>
          <Link href="https://www.linkedin.com/" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
        </HStack>
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Hotel Foda. Todos os direitos reservados.
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
