import React from 'react';
import {
  Box, SimpleGrid, Heading, Text, Button, VStack, Image, HStack, Badge, Icon, useColorModeValue
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaStar } from 'react-icons/fa';
import Image1 from '../assets/images/img_01.jpg'; // Substitua por suas imagens reais
import Image2 from '../assets/images/img_02.jpg'; // Substitua por suas imagens reais
import Image3 from '../assets/images/img_03.jpg'; // Substitua por suas imagens reais
import ScrollAnimation from '../components/ScrollAnimation'
const tours = [
  {
    id: 1,
    title: 'tours pela Cidade Histórica',
    description: 'Explore a rica história e arquitetura da cidade.',
    imageUrl: Image1,
    duration: '4 horas',
    price: '60',
    category: 'Cultural',
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Trilha Ecológica',
    description: 'Conecte-se com a natureza em uma trilha ecológica fascinante.',
    imageUrl: Image2,
    duration: '5 horas',
    price: '75',
    category: 'Aventura',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Roteiro Gastronômico',
    description: 'Descubra os sabores locais em um roteiro gastronômico exclusivo.',
    imageUrl: Image3,
    duration: '3 horas',
    price: '85',
    category: 'Gastronomia',
    rating: 4.8,
  },
];

function BoursPage() {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box p={5}>
      <Heading mb={6}>Explore Nossos tours</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {tours.map((tours) => (
          <Box key={tours} boxShadow="md" borderRadius="lg" overflow="hidden" bg={cardBg}>
            <Image src={tours.imageUrl} alt={tours.title} />
            <VStack p={5} align="left">
              <Heading size="md">{tours.title}</Heading>
              <Text>{tours.description}</Text>
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} />
                <Text>{tours.category}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaClock} />
                <Text>{tours.duration}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaDollarSign} />
                <Text>{`$${tours.price}`}</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaStar} color="yellow.400" />
                <Text>{tours.rating}</Text>
              </HStack>
              <Button colorScheme="teal">Saiba Mais</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      <ScrollAnimation />
    </Box>
  );
}

export default BoursPage;
