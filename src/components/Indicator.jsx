import { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

const Indicator = () => {
  const indicatorRef = useRef(null);
  const progress = useScrollProgress(indicatorRef);

  return (
    <div
      ref={indicatorRef}
      className={`fixed top-0 right-[2px]
        w-[5px] bg-gradient-to-b from-transparent to-pink-600 rounded-[100vmax] z-50 transition-all duration-1000 ease-linear`}
      style={{ height: `${progress}%` }}
    ></div>
  );
};

export default Indicator;
