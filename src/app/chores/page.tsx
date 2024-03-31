import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Database } from '@/lib/database.types';
import { supabase } from '@/utils/supabaseClient';
import { motion } from 'framer-motion';
import SubHeading from '@/components/ui/SubHeading';
import Loading from '@/components/ui/Loading';
import Image from 'next/image';

type Chore = Database['public']['Tables']['chores']['Row'];

interface Props {}

const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Page: FC<Props> = (props): JSX.Element => {
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
            user_id
          `);

        if (error) {
          throw error;
        }

        setChores(data as Chore[]);
      } catch (error) {
        console.error(
          'Error fetching chores:',
          error instanceof Error ? error.message : error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchChores();
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Page;
