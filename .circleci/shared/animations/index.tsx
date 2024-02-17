import { Variants } from 'framer-motion';

// -----  Animations
export const LoginSwitch: Variants = {
  default: {
    opacity: 1,
    zIndex: '2',

    transition: { duration: 0 },
  },
  switchToReg: {
    opacity: 0,
    zIndex: '-1',
    transition: { duration: 0 },
  },
};

export const RegSwitch: Variants = {
  default: {
    opacity: 0,
    zIndex: '-1',
    transition: { duration: 0 },
  },
  switchToReg: {
    opacity: 1,
    zIndex: '2',
    transition: { duration: 0 },
  },
};

export const BoxSwitch: Variants = {
  default: {
    right: 0,
    left: 'auto',
    transition: { duration: 0.2, stiffness: 300, damping: 24 },
  },
  switchToReg: {
    right: 'auto',
    left: 0,
    transition: { duration: 0.2, stiffness: 300, damping: 24 },
  },
};

// ------
