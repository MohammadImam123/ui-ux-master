import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ closeModal, isModalOpen, children, styles = 'bg-black' }) => {
  const backdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeModal, isModalOpen]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 flex items-center justify-center z-[500] cursor-pointer ${styles} bg-opacity-40 backdrop-blur-[2px]`}
      onClick={backdropClick}
      role='dialog'
      aria-modal='true'
    >
      <div className='cursor-default relative'>
        {children}
        <button
          className='p-2 bg-gray-200 rounded-full absolute top-2 right-2 z-50'
          onClick={closeModal}
          aria-label='Close modal'
        >
          <X className='size-4 text-slate-900' />
        </button>
      </div>
    </motion.div>,
    document.getElementById('modal')
  );
};

export default Modal;
