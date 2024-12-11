import { useEffect, useState } from 'react';
import { useVisibility } from '../hooks/useVisibility';

const CounterUp = ({ end, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const { ref: counterRef, isVisible } = useVisibility();

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return (
    <span
      ref={counterRef}
      className={`${className}`}
    >
      {count}
    </span>
  );
};

export default CounterUp;
