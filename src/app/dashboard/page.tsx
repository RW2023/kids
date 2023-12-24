'use client';
import { FC } from 'react';
import SubHeading from '@/components/ui/SubHeading';
import { motion } from 'framer-motion';

interface Props {}

const DashboardPage: FC<Props> = (): JSX.Element => {
  // Define motion variants for page transitions
  const pageTransitionVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="container mx-auto p-6"
    >
      <SubHeading title="Dashboard" iconClass="fas fa-tachometer-alt" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Widget for Task Overview */}
        <div className="card bg-base-300 shadow-xl glass text-lg p-6">
          <h2 className="text-xl font-semibold">Task Overview</h2>
          {/* Display task-related information here */}
        </div>

        {/* Widget for Rewards */}
        <div className="card bg-base-300 shadow-xl glass text-lg p-6">
          <h2 className="text-xl font-semibold">Rewards</h2>
          {/* Display reward-related information here */}
        </div>

        {/* Additional widgets or cards can be added here */}
      </div>

      {/* Other dashboard components or sections */}
    </motion.div>
  );
};

export default DashboardPage;
