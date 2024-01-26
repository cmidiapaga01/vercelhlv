import React, { useState, useEffect, useRef } from 'react';
import { Box, SimpleGrid, Image, VStack, Heading, Button, Text, Input, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';

function CountriesSection() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name,alpha3Code,flag,capital,population,region,subregion,area')
      .then(response => {
        setAllCountries(response.data);
        const initialCountries = ['BR', 'AR', 'JP'];
        const filteredCountries = response.data.filter(country => initialCountries.includes(country.alpha3Code));
        setCountries(filteredCountries);
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos países:', error);
      });

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const handleMoreInfo = (country) => {
    setSelectedCountry(country);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (searchText.length > 0) {
      setSuggestions(allCountries.filter(country => country.name.toLowerCase().startsWith(searchText.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectCountry = (country) => {
    if (!countries.some(existingCountry => existingCountry.alpha3Code === country.alpha3Code)) {
      setCountries([...countries, country]);
    }
    setSearch('');
    setSuggestions([]);
  };

  const handleDeleteCountry = (countryCode) => {
    setCountries(countries => countries.filter(country => country.alpha3Code !== countryCode));
  
    // Limpa o país selecionado se for o mesmo que está sendo removido
    if (selectedCountry && selectedCountry.alpha3Code === countryCode) {
      setSelectedCountry(null);
    }
  };

  return (
    <Box p={8} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Input
        placeholder="Pesquisar país..."
        value={search}
        onChange={handleSearchChange}
        mb={4}
      />
      {suggestions.length > 0 && (
        <Box ref={suggestionsRef} bg="white" boxShadow="lg" p={4}>
          {suggestions.map(suggestion => (
            <Box key={suggestion.alpha3Code} p={2} _hover={{ bg: 'gray.200' }} cursor="pointer" onClick={() => handleSelectCountry(suggestion)}>
              {suggestion.name}
            </Box>
          ))}
        </Box>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={4}>
        {countries.map((country) => (
          <VStack key={country.alpha3Code} spacing={4} bg="white" boxShadow="lg" p={5} borderRadius="lg">
            <Image borderRadius="lg" boxSize="200px" src={country.flag} alt={country.name} />
            <Heading size="md">{country.name}</Heading>
            <Button colorScheme="teal" onClick={() => handleMoreInfo(country)}>Saiba Mais</Button>
            <Button colorScheme="red" onClick={() => handleDeleteCountry(country.alpha3Code)}>Remover</Button>
          </VStack>
        ))}
      </SimpleGrid>

      {selectedCountry && (
        <Box mt={10} p={5} bg="white" boxShadow="lg" borderRadius="lg">
          <Heading size="lg" mb={4}>Informações do País: {selectedCountry.name}</Heading>
          <Text fontSize="lg">Capital: {selectedCountry.capital}</Text>
          <Text fontSize="lg">População: {selectedCountry.population.toLocaleString()}</Text>
          <Text fontSize="lg">Região: {selectedCountry.region}</Text>
          <Text fontSize="lg">Subregião: {selectedCountry.subregion}</Text>
          <Text fontSize="lg">Área: {selectedCountry.area.toLocaleString()} km²</Text>
        </Box>
      )}
    </Box>
  );
}

export default CountriesSection;
