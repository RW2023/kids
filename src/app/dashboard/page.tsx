'use client';
// src/app/dashboard/page.tsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SubHeading from '@/components/ui/SubHeading';
import { motion } from 'framer-motion';
import { supabase } from '@/utils/supabaseClient';
import Loading from '@/components/ui/Loading';

interface Subtask {
  id: number;
  title: string;
  status: string;
}

interface Chore {
  id: number;
  title: string;
  description?: string; // Add the description field
  status: string;
}


const DashboardPage: React.FC = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChores = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('chores')
          .select('id, title, description, status'); // Include description

        if (error) {
          throw error;
        }

        setChores(data || []);
      } catch (error) {
        console.error('Error fetching chores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChores();
  }, []);

  const pageTransitionVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <>
      <Head>
        <title>Dashboard | Chore Tracker</title>
        <meta name="description" content="Chore Tracker dashboard/login" />
      </Head>
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
          <div
            className="hero h-1/2 bg-base-200 rounded-box bg-opacity-10 border-base-300 border-2"
            style={{
              backgroundImage: `url(/img/boyVids.png)`,
            }}
          >
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-2">
              {chores.map((chore) => (
                <div
                  key={chore.id}
                  className="card bg-base-300 shadow-xl glass text-lg p-6"
                >
                  <h2 className="text-xl font-semibold">{chore.title}</h2>
                  <p>{chore.description}</p> {/* Render the description */}
                  <p>Status: {chore.status}</p> {/* Render the status */}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default DashboardPage;
