import { Mail, MapPinCheckInside, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { connects, socialIcons } from '../constent/socialIcons';
import { blurVariants } from '../constent/variants';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container pt-10 pb-5'>
        <motion.div
          variants={blurVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className=' max-w-6xl mx-auto bg-white shadow_1 rounded-xl grid md:grid-cols-2 overflow-hidden'
        >
          <div className='lg:p-10 p-6 bg-indigo-600'>
            <h3 className='text-white'>Let's Collaborate</h3>
            <div className='flex flex-col gap-3 mt-5'>
              <a
                href='mailto:imamulrakib192837@gmail.com'
                className='flex items-center gap-2 sm:text-base text-sm text-white '
              >
                <Mail /> imamulrakib192837@gmail.com
              </a>
              <a
                href='tell:01311103158'
                className='flex items-center gap-2 sm:text-base text-sm text-white'
              >
                <Phone /> 01311103158
              </a>
              <span className='flex items-center gap-2 sm:text-base text-sm text-white'>
                <MapPinCheckInside /> Chattogram , Bangladesh
              </span>
            </div>
            <div>
              <h4 className='text-white mt-5'>Connect with Me</h4>
              <div className='flex items-center gap-3 lg:mt-5 mt-3'>
                {socialIcons?.map((social, index) => (
                  <a
                    href=''
                    className='p-3 bg-white hover:bg-gray-800 hover:text-white rounded-full text-gray-800 transition-all duration-300 ease-linear '
                  >
                    <social.Icon className='size-[25px]' />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='bg-[#011c2b] bg-cover bg-no-repeat bg-center block lg:p-10 p-6 text-center '>
            <h3 className='text-gray-200'>
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className='text-gray-300 mt-5'>
              I'm always excited to take on new challenges and create stunning
              designs. Let's discuss your project and make it a reality!
            </p>
            <h4 className='text-white lg:mt-10 mt-5'>
              Available for Freelance Projects
            </h4>
            <div className='flex items-center flex-wrap justify-center gap-5 mt-5'>
              {connects?.map((connect, index) => (
                <a
                  href={connect?.href}
                  className='bg-white p-3 w-[150px] rounded-md'
                >
                  <img
                    src={connect?.img}
                    alt=''
                    className='w-full h-auto'
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
