'use client';
// src/app/dashboard/page.tsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import { motion } from 'framer-motion';
import { supabase } from '@/utils/supabaseClient';
import Loading from '@/components/ui/Loading';
import Image from 'next/image';

interface Subtask {
  id: number;
  title: string;
  status: string;
}

interface Chore {
  id: number;
  title: string;
  description?: string;
  status: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string;
  subtasks: Subtask[];
}

const DashboardPage: React.FC = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChores = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from('chores').select(`
          id,
          title,
          description,
          status,
          created_at,
          updated_at,
          user_id,
          subtasks (
            id,
            title,
            status
          )
        `);

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
        <Heading title="Dashboard" iconClass="fas fa-tachometer-alt" />
        <SubHeading title="Chores list" iconClass="fas fa-clipboard-list" />

        {isLoading ? (
          <Loading />
        ) : (
          <div className="hero min-h-screen bg-base-200 rounded-box bg-opacity-10 border-base-300 border-2 drop-shadow-lg relative">
            <Image
              src="/img/boyVids.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background image"
            />
            <div className="grid grid-cols-1 sm:gap-2 gap-6 lg:grid-cols-2 p-2">
              {chores.map((chore) => (
                <div
                  key={chore.id}
                  className="card-compact bg-base-500 shadow-xl glass text-lg p-6 rounded"
                >
                  <div className="card-title flex-col justify-center items-center font-bold border-y">
                    <i className="fas fa-thumbtack mr-2 mt-2 text-base-300"></i>
                    <h2 className="text-xl font-semibold text-base-300">
                      {chore.title}
                    </h2>
                  </div>
                  <div className="card-body text-base-300">
                    <p className="text-lg">{chore.description}</p>
                    <p className="text-lg">
                      {chore.status === 'completed' ? (
                        <i className="fas fa-check-circle mr-2"></i>
                      ) : (
                        <i className="fas fa-times-circle mr-2"></i>
                      )}
                      Status: {chore.status}
                    </p>
                    {chore.subtasks.map((subtask) => (
                      <div key={subtask.id} className="subtask text-lg">
                        {subtask.title} - Status:
                        <select
                          title="Status"
                          value={subtask.status}
                          onChange={(e) => console.log(e.target.value)} // Placeholder for actual change handling
                        >
                          <option value="completed">Completed</option>
                          <option value="incomplete">Incomplete</option>
                        </select>
                      </div>
                    ))}
                  </div>
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
