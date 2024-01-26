import React from 'react';
import { Box, SimpleGrid, Heading, Text, VStack, Image, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaSpa, FaUtensils, FaSwimmer, FaCocktail, FaConciergeBell, FaWifi } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Spa de Luxo',
    description: 'Relaxe e rejuvenesça com nossos tratamentos de spa exclusivos.',
    imageUrl: '/assets/images/spa.jpg',
    icon: FaSpa,
  },
  {
    id: 2,
    title: 'Restaurantes Gourmet',
    description: 'Experimente uma variedade de pratos gourmet preparados por chefs renomados.',
    imageUrl: '/assets/images/restaurant.jpg',
    icon: FaUtensils,
  },
  {
    id: 3,
    title: 'Piscinas Panorâmicas',
    description: 'Desfrute de nossas incríveis piscinas com vistas deslumbrantes.',
    imageUrl: '/assets/images/pool.jpg',
    icon: FaSwimmer,
  },
  {
    id: 4,
    title: 'Bar e Lounge',
    description: 'Relaxe com coquetéis exclusivos em nosso elegante bar e lounge.',
    imageUrl: '/assets/images/bar.jpg',
    icon: FaCocktail,
  },
  {
    id: 5,
    title: 'Concierge 24h',
    description: 'Nossa equipe de concierge está sempre disponível para atender às suas necessidades.',
    imageUrl: '/assets/images/concierge.jpg',
    icon: FaConciergeBell,
  },
  {
    id: 6,
    title: 'Wi-Fi Gratuito',
    description: 'Mantenha-se conectado com nosso Wi-Fi de alta velocidade disponível em todo o hotel.',
    imageUrl: '/assets/images/wifi.jpg',
    icon: FaWifi,
  },
];

function ServicesHighlights() {
  return (
    <Box p={8} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Nossos Serviços
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {services.map((service) => (
          <VStack key={service.id} spacing={4} bg="white" boxShadow="lg" p={5} borderRadius="lg">
            <Icon as={service.icon} boxSize="50px" p={2} borderRadius="full" bg="teal.500" color="white" />
            <Heading size="md">{service.title}</Heading>
            <Text>{service.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ServicesHighlights;
