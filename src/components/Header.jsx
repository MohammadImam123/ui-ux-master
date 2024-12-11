import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { navItems } from '../constent';
import { fadeTopVariants } from '../constent/variants';
import Modal from './Modal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.querySelector(`${id}`);
    element.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      variants={fadeTopVariants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='absolute md:top-5 top-3 left-0 right-0 w-full z-[50]'
    >
      <div className='container'>
        <nav className='px-5 md:py-4 py-3 bg-white/30 shadow_2  rounded-lg backdrop-blur-md flex items-center justify-between'>
          <a
            href=''
            className='lg:text-4xl text-2xl text-gray-800 font-bold font-Kanit'
          >
            MOHAMMAD
          </a>
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-5 nav_items '>
              {navItems?.map((item, index) => (
                <li>
                  <button onClick={() => handleScroll(item?.href)}>
                    {item?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className='lg:hidden block text-gray-800'
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Modal
            key='modal'
            isModalOpen={isMenuOpen}
            closeModal={() => setIsMenuOpen(false)}
          >
            <ul className='flex flex-col items-start justify-start gap-4 mobile_menu bg-white w-[300px]  p-10 rounded-lg shadow_2 relative'>
              {navItems?.map((item, index) => (
                <li>
                  <button onClick={() => handleScroll(item?.href)}>
                    {item?.label}
                  </button>
                </li>
              ))}
            </ul>
          </Modal>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
