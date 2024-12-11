import { motion } from 'motion/react';
import { useState } from 'react';
import { socialIcons } from '../constent/socialIcons';
import { createSlideVariants } from '../constent/variants';
import Experiences from './Experiences';
import Skills from './Skills';
import HeroImg from '/HeroImg.png';

const About = () => {
  const [activeMenu, setActiveMenu] = useState('Skills');
  return (
    <section id='about'>
      <div className='container lg:py-20 py-10'>
        <div className='lg:max-w-7xl max-w-2xl w-full mx-auto'>
          <div className='grid lg:grid-cols-2 xl:gap-20  lg:gap-10 gap-7 items-start'>
            <motion.div
              variants={createSlideVariants('left', 1)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              className='relative flex gap-8'
            >
              <div className='flex flex-col items-center justify-center lg:gap-5 sm:gap-3 gap-2'>
                <span className='w-[2px] sm:h-[60px] h-[30px] bg-gray-300'></span>
                {socialIcons?.map((social, index) => (
                  <a
                    href={social?.href}
                    target='_blank'
                    className='p-2 bg-indigo-500 hover:bg-indigo-700  text-white rounded-sm transition-all duration-300 ease-linear'
                  >
                    <social.Icon className='size-5' />
                  </a>
                ))}
                <span className='w-[2px] sm:h-[60px] h-[30px] bg-gray-300'></span>
              </div>
              <div className='relative '>
                <img
                  src={HeroImg}
                  alt='hero image'
                  className='lg:max-w-[600px] max-w-[450px] w-full h-auto block'
                />
              </div>
            </motion.div>
            <motion.div
              variants={createSlideVariants('right', 1)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              className='pt-3'
            >
              <h2 className='text-gray-800 mb-1'>IMAMUL HASAN</h2>
              <span className='text-indigo-600 text-lg font-medium lg:mb-5 mb-3 block'>
                UI/UX Designer & Digital Craftsman
              </span>
              <p className='lg:text-base text-sm leading-[1.6em] text-gray-600 max-w-[600px] font-medium'>
                With over 2 years of experience in crafting digital experiences,
                I blend creativity with user-centric design principles to create
                intuitive and visually stunning interfaces. My passion lies in
                solving complex problems through simple, elegant design
                solutions.
              </p>
              <div className='flex items-center xl:mt-7 mt-5 rounded-md overflow-hidden shadow-lg max-w-max mb-7'>
                {['Skills', 'Experiences'].map((item, index) => (
                  <button
                    key={index}
                    className={` px-5 py-3 leading-none ${
                      activeMenu === item
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700'
                    }`}
                    onClick={() => setActiveMenu(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div>
                {activeMenu === 'Skills' ? <Skills /> : <Experiences />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
