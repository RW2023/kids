'use client';
import { FC, useState, useEffect } from 'react';
import { Database } from '@/lib/database.types';
import { supabase } from '@/utils/supabaseClient';
import { motion } from 'framer-motion';
import SubHeading from '@/components/ui/SubHeading';
import Loading from '@/components/ui/Loading';
import Image from 'next/image';

type Chore = Database['public']['Tables']['chores']['Row'] & {
  subtasks: Database['public']['Tables']['subtasks']['Row'][];
};

interface Props {}

const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Page: FC<Props> = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChoresAndSubtasks = async () => {
      setLoading(true);
      try {
        let { data: choresData, error: choresError } = await supabase.from(
          'chores',
        ).select(`
            id,
            title,
            description,
            status,
            created_at,
            updated_at,
            user_id,
            subtasks:subtasks!inner(*)
          `);

        if (choresError) {
          throw choresError;
        }

        setChores(choresData as Chore[]);
      } catch (error) {
        console.error(
          'Error fetching chores and subtasks:',
          error instanceof Error ? error.message : error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchChoresAndSubtasks();
  }, []);

  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        className="container mx-auto p-6 min-h-screen"
      >
        <SubHeading title="Chores list" iconClass="fas fa-clipboard-list" />

        {isLoading ? (
          <Loading />
        ) : (
          chores.map((chore) => (
            <div
              key={chore.id}
              className="bg-base-200 rounded-box border-2 p-4 m-4 relative shadow-lg"
            >
              <div className="font-bold text-xl mb-2">{chore.title}</div>
              <p>{chore.description}</p>
              <p>Status: {chore.status}</p>
              <div className="mt-4">
                <h3 className="underline">Subtasks:</h3>
                <ul>
                  {chore.subtasks.map((subtask) => (
                    <li key={subtask.id}>
                      {subtask.title} - {subtask.status}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Page;
