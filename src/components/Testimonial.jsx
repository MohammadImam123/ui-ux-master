import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { testimonials } from '../constent';
import { blurVariants, fadeBottomVariants } from '../constent/variants';

const Testimonial = () => {
  const [isMore, setIsMore] = useState(false);
  return (
    <section id='testimonials'>
      <div className='container lg:py-20 py-10'>
        <motion.h3
          variants={blurVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 1 }}
          className='text-center text-gray-800'
        >
          What Our Clients Say
        </motion.h3>
        <div
          className={` relative ${
            isMore ? 'h-auto' : 'h-[600px] overflow-y-hidden'
          }`}
        >
          <div className='lg:columns-3 sm:columns-2 gap-7 sm:mt-7 mt-5'>
            {testimonials?.map((testimonial, index) => (
              <motion.div
                variants={fadeBottomVariants}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className='bg-white rounded-lg p-5 mb-5 break-inside-avoid-column relative shadow_1'
              >
                <Quote className='size-7 text-gray-400 mb-4 absolute -bottom-2 right-2 z-0' />
                <p className='text-gray-500'>{testimonial?.content}</p>
                <div className='flex items-center gap-5 mt-5'>
                  <div className='overflow-hidden'>
                    <img
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className='size-12 rounded-full'
                    />
                  </div>
                  <div className='pr-5'>
                    <p className='text-gray-800 font-medium text-lg'>
                      {testimonial?.name}
                    </p>
                    <span className='inline-block text-gray-500 text-sm !leading-[1.2em]'>
                      {testimonial?.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {!isMore && (
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 to-transparent pt-32 pb-10'>
              <button
                className='mx-auto px-5 py-3 bg-indigo-600 text-white hover:bg-indigo-700  rounded-md block mt-5'
                onClick={() => setIsMore(true)}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
