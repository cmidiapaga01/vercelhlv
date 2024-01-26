import { motion, useScroll } from 'framer-motion';
import React from 'react';
import ServicesHighlights from './ServicesHighlights';

function ScrollAnimation2() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress
      }}
    >
      {ServicesHighlights}
    </motion.div>
  );
}

export default ScrollAnimation2;
