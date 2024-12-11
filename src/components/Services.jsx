import { motion } from 'motion/react';
import React from 'react';
import { services } from '../constent';
import { blurVariants, fadeBottomVariants } from '../constent/variants';

const Services = () => {
  return (
    <section
      id='services'
      className='bg-blue-100'
    >
      <div className='container lg:py-20 py-10'>
        <motion.h3
          variants={blurVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 1 }}
          className='text-center text-gray-800'
        >
          What We Offer
        </motion.h3>
        <motion.div
          variants={fadeBottomVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid lg:grid-cols-3 sm:grid-cols-2 gap-7 sm:mt-7 mt-5 group '
        >
          {services.map((service, index) => (
            <div
              key={index}
              className='service-card rounded-xl overflow-hidden lg:p-10 p-5 bg-white relative clip_path_one group-hover:blur-sm hover:!blur-0 hover:scale-105 transition-all duration-300 ease-linear'
            >
              <div className='relative z-10'>
                <span className='p-3 rounded-full bg-indigo-600 text-white mb-5 block max-w-max '>
                  <service.Icon className='size-[30px]' />
                </span>
                <h4 className='text-gray-800 '>{service.title}</h4>
                <p className='md:text-lg text-base text-gray-500  lg:mt-4 mt-2 '>
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
