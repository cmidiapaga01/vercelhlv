import React from 'react';
import { Box, SimpleGrid, Image, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Image1 from '../assets/images/img_01.jpg';
import Image2 from '../assets/images/img_02.jpg';

const tours = [
  {
    id: 1,
    title: 'Tour pela Cidade',
    description: 'Descubra os segredos da cidade com um guia experiente.',
    imageUrl: Image1,
  },
  {
    id: 2,
    title: 'Aventura na Natureza',
    description: 'Explore as belezas naturais em uma emocionante aventura ao ar livre.',
    imageUrl: Image2,
  },
  // Adicione mais tours conforme necessário
];

function ToursPage() {
  return (
    <Box p={5}>
      <Heading mb={6}>Explore Nossos Tours</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {tours.map((tour) => (
          <Box key={tour.id} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image src={tour.imageUrl} alt={tour.title} />
            <VStack p={5} align="left">
              <Heading size="md">{tour.title}</Heading>
              <Text mb={4}>{tour.description}</Text>
              <Button colorScheme="teal">Saiba Mais</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ToursPage;
