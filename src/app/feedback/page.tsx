'use client';
import { FC } from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import { motion } from 'framer-motion';

interface Props {}

const FeedbackPage: FC<Props> = (): JSX.Element => {
  const pageTransitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <head>
        <title>Chore Tracker | Feedback</title>
      </head>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        className="flex flex-col justify-text-center m-auto"
      >
        <FeedbackForm />
        <h2 className="font-sans text-center text 2xl mt-1 flex flex-col">
          Submit Feedback Please!
        </h2>
        <p className="text-xl text-center flex flex-col">
          Please submit any bugs, comments or suggestions 😊
        </p>
      </motion.div>
    </>
  );
};

export default FeedbackPage;
