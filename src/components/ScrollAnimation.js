import { motion, useScroll } from 'framer-motion';
import React from 'react';
import myImage from '../assets/images/img_01.jpg'; // Substitua pelo caminho da sua imagem

function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress
      }}
    >
      <h2>Meu Título Animado</h2>
      <img src={myImage} alt="Descrição da imagem" />
    </motion.div>
  );
}

export default ScrollAnimation;
