import { useLenis } from 'lenis/react';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Modal from './Modal';
import PortfolioCaseStudy from './PortfolioCaseStudy';

const PortfolioCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const openModal = () => {
    lenis.stop();
    setIsOpen(true);
    document.body.classList.add('active');
  };
  const closeModal = () => {
    lenis.start();
    setIsOpen(false);
    document.body.classList.remove('active');
  };

  return (
    <>
      <div className='bg-white shadow_2 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-linear'>
        <div className='h-[300px]'>
          <img
            src={item?.image}
            alt={item?.title}
            className='w-full h-full block object-cover object-top'
          />
        </div>
        <div className='p-5 border-t border-gray-300 flex items-center flex-wrap justify-between gap-2'>
          <h5>{item.title}</h5>
          <button
            className='text-sm font-medium text-indigo-600 border-b border-indigo-600'
            onClick={openModal}
          >
            View Case-Study
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Modal
            key='modal'
            isModalOpen={isOpen}
            closeModal={closeModal}
          >
            <PortfolioCaseStudy title={item?.title} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioCard;
