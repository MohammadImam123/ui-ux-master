export const blurVariants = {
  hidden: {
    filter: 'blur(20px)',
    y: 20,
  },
  visible: {
    filter: 'blur(0px)',
    y: 0,
  },
};
export const fadeTopVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const fadeBottomVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const createSlideVariants = (direction = 'left', duration = 0.5) => ({
  hidden: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration,
    },
  },
});
