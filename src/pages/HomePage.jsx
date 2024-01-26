import React, { useState } from 'react'; // Adicionando a importação do useState
import { Box, Heading } from '@chakra-ui/react';
import Slider from 'react-slick';
import WelcomeSection from '../components/WelcomeSection';
import ServicesHighlights from '../components/ServicesHighlights';
import CountriesSection from '../components/CountriesSection';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollAnimation2 from '../components/ScrollAnimation2';
import Image3 from '../assets/images/img_03.jpg';
import Image4 from '../assets/images/img_04.jpg';
import Image5 from '../assets/images/img_05.jpg';
import Image6 from '../assets/images/img_06.jpg';

function HomePage() {
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

    // Simula o fim do carregamento após 2 segundos
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    if (isLoading) {
        return <LoadingSpinner />; // Exibe o spinner de carregamento
    }

    return (
        <Box>
            <Slider {...settings}>
                {/* Slides */}
                <Box h="60vh" bgImage={`url(${Image3})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Descubra o Luxo</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image4})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image5})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image6})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
            </Slider>
            <WelcomeSection />
            <ScrollAnimation2 />
            <CountriesSection />
            <Footer />
        </Box>
    );
}

export default HomePage;
