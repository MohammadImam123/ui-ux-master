import { useCallback, useEffect, useRef, useState } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  const updateScroll = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const percentageProgress = Math.round(
          (currentProgress / scrollHeight).toFixed(2) * 100
        );

        setProgress((prevProgress) =>
          Math.abs(prevProgress - percentageProgress) > 0.1
            ? percentageProgress
            : prevProgress
        );
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateScroll]);
  return progress;
};

export default useScrollProgress;
