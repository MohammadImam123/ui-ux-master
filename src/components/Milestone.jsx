import { motion } from 'motion/react';
import React from 'react';
import { achievements } from '../constent/achievements';
import { blurVariants } from '../constent/variants';
import CounterUp from './CounterUp';

const Milestone = () => {
  return (
    <section>
      <div className='container'>
        <motion.div
          variants={blurVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className='px-10 py-8 max-sm:max-w-[350px] max-sm:mx-auto bg-white shadow_1 lg:-mt-20 -mt-16 rounded-lg grid md:grid-cols-4 sm:grid-cols-2 gap-5 '
        >
          {achievements?.map((achievement, index) => (
            <div
              className='text-center'
              key={index}
            >
              <h2 className='text-5xl font-Kanit font-medium text-gray-800 mb-1 !leading-[1em]'>
                <CounterUp
                  end={achievement?.value}
                  duration={2000}
                />
              </h2>
              <p className='lg:text-lg text-base leading-[1.3em] text-gray-600 font-medium'>
                {achievement?.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Milestone;
