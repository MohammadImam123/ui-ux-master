import { motion } from 'motion/react';
import React from 'react';

const Blur = ({ children, amount = 0.5 }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)' }}
      whileInView={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: amount }}
    >
      {children}
    </motion.div>
  );
};

export default Blur;
