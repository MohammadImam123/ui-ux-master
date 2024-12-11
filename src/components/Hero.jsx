import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { blurVariants } from '../constent/variants';

export default function Hero() {
  const handleMove = () => {
    const element = document.getElementById('portfolios');
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className='hero bg-HeroBg bg-cover bg-center bg-no-repeat'>
      <div className='container'>
        <div className='lg:py-[180px] md:py-[130px] py-[100px]   text-center'>
          <motion.h1
            variants={blurVariants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            className=' large font-Kanit uppercase  text-gray-900 sm:mb-5 mb-3 tracking-[3px] max-md:text-center'
          >
            <p className='block sm:whitespace-nowrap'>
              <span className='text-indigo-600'>Elevate</span> Your
            </p>
            <p className='block sm:whitespace-nowrap'>
              Digital <span className='text-pink-600'>Presence</span>
            </p>
          </motion.h1>

          <motion.p
            variants={blurVariants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-50px' }}
            className='lg:text-3xl md:text-xl sm:text-lg text-base text-gray-800 mb-5 lg:max-w-[600px] md:max-w-[450px] max-w-[300px] mx-auto text-center font-medium'
          >
            UI/UX Designer specializing in creating memorable brand experiences
          </motion.p>
          <motion.button
            variants={blurVariants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            className='px-5 py-3 bg-indigo-600  rounded-md  text-white  hover:bg-indigo-700  transition-all duration-200 ease-linear md:text-lg text-base mx-auto font-medium flex items-center gap-1'
            onClick={handleMove}
          >
            View Works <ArrowDown size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
