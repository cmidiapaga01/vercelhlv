// TourDetailsPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Heading, Text, VStack, Image, HStack, Icon, Button, useColorMode
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaStar } from 'react-icons/fa';

// Importe os dados dos tours
import tours from '../data/tours';

function TourDetailsPage() {
  const { id } = useParams(); // Obtém o ID do tour da URL
  const { colorMode } = useColorMode(); // Obtém o modo de cores atual

  // Encontre o tour correspondente com base no ID
  const tour = tours.find(tour => tour.id === parseInt(id));

  // Verifique se o tour foi encontrado
  if (!tour) {
    return <div>Não foi possível encontrar o tour</div>; // Adicione um tratamento para quando o tour não for encontrado
  }

  // Determina as cores de acordo com o modo de cores atual
  const cardBg = colorMode === 'light' ? 'white' : 'gray.700';
  const textColor = colorMode === 'light' ? 'gray.700' : 'white';

  return (
    <Box p={5}>
      <Heading mb={6}>{tour.title}</Heading>
      <Box boxShadow="md" borderRadius="lg" overflow="hidden" bg={cardBg}>
        <Image src={tour.imageUrl} alt={tour.title} />
        <VStack p={5} align="left">
          <Text color={textColor}>{tour.description}</Text>
          <HStack spacing={2}>
            <Icon as={FaMapMarkerAlt} />
            <Text color={textColor}>{tour.category}</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaClock} />
            <Text color={textColor}>{tour.duration}</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaDollarSign} />
            <Text color={textColor}>{`$${tour.price}`}</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaStar} color="yellow.400" />
            <Text color={textColor}>{tour.rating}</Text>
          </HStack>
          <Button colorScheme="teal">Reservar Agora</Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default TourDetailsPage;
