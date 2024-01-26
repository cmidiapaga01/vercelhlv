import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import Image1 from '../assets/images/img_01.jpg';
import Image2 from '../assets/images/img_02.jpg';

function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Box>
            <Slider {...settings}>
                <Box h="60vh" bgImage={`url(${Image1})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Descubra o Luxo</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image2})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                {/* Adicione mais slides conforme necessário */}
            </Slider>
            <SimpleGrid columns={3} spacing={10} p={10}>
                {/* Cards de características */}
            </SimpleGrid>
            {/* Seções de testimonials e call to action */}
        </Box>
    );
}

export default HomePage;
