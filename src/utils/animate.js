export const animateFadeYVariants = ({ opacityValue = 1, delay = 0 } = {}) => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: opacityValue,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

export const animateYStriggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const animateYChildVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const alertVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
