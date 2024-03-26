import React from 'react';
import Slider from 'react-slick';
import { Box, Heading } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image3 from '../assets/images/img_03.jpg';
import Image4 from '../assets/images/img_04.jpg';
import Image5 from '../assets/images/img_05.jpg';
import Image6 from '../assets/images/img_06.jpg';

const Carousel = () => {
  const images = [Image3, Image4, Image5, Image6]; // Array de imagens para o carrossel

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box key={index} h="60vh" bgImage={`url(${image})`} bgSize="cover" bgPosition="center">
          <Heading color="white" mb={3}>Slide {index + 1}</Heading>
        </Box>
      ))}
    </Slider>
  );
}

export default Carousel;
