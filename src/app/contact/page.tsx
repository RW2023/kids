'use client';
import Contact from '@/components/Contact';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface Props {}

const ContactPage: FC<Props> = (): JSX.Element => {
  const pageTransitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <head>
        <title>Chore Tracker | Contact</title>
        
      </head>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default ContactPage;
