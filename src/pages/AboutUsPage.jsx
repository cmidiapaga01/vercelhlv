import React from 'react';
import { Box, VStack, Heading, Text, Image, Flex, Spacer, useColorModeValue } from '@chakra-ui/react';

const historyEvents = [
  {
    id: 1,
    year: '1990',
    title: 'Fundação do Hotel',
    description: 'O Hotel Foda foi fundado em 1990, em uma localização privilegiada.',
    imageUrl: '/assets/images/history1.jpg',
  },
  {
    id: 2,
    year: '2000',
    title: 'Expansão das Instalações',
    description: 'Em 2000, o hotel expandiu suas instalações, adicionando novos quartos e serviços.',
    imageUrl: '/assets/images/history2.jpg',
  },
  {
    id: 3,
    year: '2010',
    title: 'Renovação Completa',
    description: 'O hotel passou por uma renovação completa em 2010, modernizando todas as áreas.',
    imageUrl: '/assets/images/history3.jpg',
  },
  // Adicione mais eventos conforme necessário
];

function AboutUsPage() {
  const timelineItemBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <VStack spacing={8} p={5}>
      <Heading mb={5}>Sobre o Hotel Foda</Heading>
      <Text fontSize="lg">
        Conheça mais sobre nossa jornada e o que torna o Hotel Foda único.
      </Text>

      {historyEvents.map((event) => (
        <Flex key={event.id} w="full" p={5} bg={timelineItemBg} borderRadius="lg" alignItems="center">
          <Image boxSize="100px" borderRadius="full" src={event.imageUrl} alt={event.title} mr={5} />
          <Box>
            <Text fontWeight="bold">{event.year}</Text>
            <Heading size="md" mb={2}>{event.title}</Heading>
            <Text>{event.description}</Text>
          </Box>
          <Spacer />
        </Flex>
      ))}

      {/* Adicione mais seções para missão, visão e equipe */}
    </VStack>
  );
}

export default AboutUsPage;
