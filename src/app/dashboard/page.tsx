'use client';
import React, { useState, useEffect } from 'react';
import SubHeading from '@/components/ui/SubHeading';
import { motion } from 'framer-motion';
import { fetchChores } from '@/services/choreService';
import Loading from '@/components/ui/Loading';

interface Subtask {
  title: string;
  status: string;
  // Add other fields as needed
}

interface Chore {
  _id: string;
  title: string;
  description: string;
  status: string;
  rewardPoints: number;
  subtasks: Subtask[];
  __v: number;
}

const DashboardPage: React.FC = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadChores = async () => {
      try {
        const data = await fetchChores();
        setChores(data);
      } catch (error) {
        console.error('Error fetching chores:', error);
      } finally {
        setLoading(false);
      }
    };

    loadChores();
  }, []);

  const pageTransitionVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <>
      <head>
        <title>Dashboard</title>
        <meta name="description" content="Chore Tracker dashboard/login" />
      </head>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        className="container mx-auto p-6 min-h-screen"
      >
        <SubHeading title="Dashboard" iconClass="fas fa-tachometer-alt" />

        {isLoading ? (
          <Loading />
        ) : (
          <>
          <SubHeading title="Chores" iconClass="fas fa-tasks" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {chores.map((chore) => (
              <div
                key={chore._id}
                className="card bg-base-300 shadow-xl glass text-lg p-6"
              >
                <h2 className="text-xl font-semibold">{chore.title}</h2>
                <p>{chore.description}</p>
                <ul>
                  {chore.subtasks.map((subtask, index) => (
                    <li key={index}>{subtask.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default DashboardPage;
