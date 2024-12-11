import { ChevronsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [activeTop, setActiveTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 150) {
        setActiveTop(true);
      } else {
        setActiveTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 z-50  transition-all duration-300 ease-linear ${
        activeTop ? 'opacity-100 right-3' : 'opacity-0 right-0'
      }`}
    >
      <button
        className='p-2 bg-slate-800 rounded-full'
        onClick={() => handleScrollToTop()}
      >
        <ChevronsUp className='size-5 text-white' />
      </button>
    </div>
  );
};

export default ScrollTop;
