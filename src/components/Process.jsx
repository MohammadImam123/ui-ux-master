import { motion } from 'motion/react';
import React from 'react';
import { processSteps } from '../constent';
import { blurVariants, createSlideVariants } from '../constent/variants';

const Process = () => {
  return (
    <section
      className='bg-blue-100'
      id='process'
    >
      <div className='container lg:py-20 py-10'>
        <div className='max-w-5xl mx-auto'>
          <motion.h3
            variants={blurVariants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 1 }}
            className='text-gray-800 text-center leading-none sm:mb-10 mb-5'
          >
            Our Approach
          </motion.h3>
          <div className='grid gap-7 relative'>
            <div className='absolute top-0 bottom-0 sm:left-1/2 left-0 -translate-x-1/2 transform w-1 bg-indigo-600' />
            {processSteps?.map((step, index) => (
              <motion.div
                key={index}
                variants={createSlideVariants(
                  `${index % 2 === 0 ? 'left' : 'right'}`
                )}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className='relative'
              >
                <div
                  className={`flex items-center  ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`sm:w-1/2 w-full max-sm:pl-8 ${
                      index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className='sm:p-7 p-5 bg-white rounded-lg hover:scale-105 transition-all duration-300 ease-linear'>
                      <span className='size-12 bg-indigo-600 rounded-full flex items-center justify-center mb-3'>
                        <step.icon className='size-6 text-white' />
                      </span>
                      <h4 className='text-gray-700'>{step?.title}</h4>
                      <p className='text-gray-500 lg:mt-2 mt-1 text-base font-medium leading-[1.5em]'>
                        {step?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='size-6 rounded-full absolute top-0 sm:left-1/2 left-0 bg-indigo-600 -translate-x-1/2 flex items-center justify-center'>
                  <div className='size-3 bg-white rounded-full'></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
