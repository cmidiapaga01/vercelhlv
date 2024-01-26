import React from 'react';
import { Box, Heading, Text, Button, VStack, useColorModeValue, Fade } from '@chakra-ui/react';
import Image1 from '../assets/images/img_01.jpg'

function WelcomeSection() {
  return (
    <Box
      position="relative"
      bgImage= {Image1} // Substitua com uma imagem de fundo do hotel
      bgPosition="center"
      bgSize="cover"
      h="80vh"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(0, 0, 0, 0.6)')}
      />
      <VStack
        spacing={4}
        position="relative"
        top="50%"
        transform="translateY(-50%)"
        textAlign="center"
        p={8}
      >
        <Fade in={true} delay={0.5}>
          <Heading as="h1" size="2xl" color={useColorModeValue('gray.800', 'white')}>
            Bem-vindo ao Hotel Foda
          </Heading>
        </Fade>
        <Fade in={true} delay={1}>
          <Text fontSize="xl" color={useColorModeValue('gray.700', 'gray.200')} maxW="2xl">
            Uma experiência única onde conforto e luxo se encontram.
          </Text>
        </Fade>
        <Fade in={true} delay={1.5}>
          <Button colorScheme="teal" size="lg">Faça sua Reserva</Button>
        </Fade>
      </VStack>
    </Box>
  );
}

export default WelcomeSection;
