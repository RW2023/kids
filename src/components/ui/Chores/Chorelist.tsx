'use client'
import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient'; // Adjust the import path as necessary
import { Database } from '@/lib/database.types'; // Adjust the import path as necessary
import Chore from './Chore'; // Make sure this path points to your Chore component
import Loading from '../Loading';
const ChoreList: React.FC = () => {
  const [chores, setChores] = useState<
    (Database['public']['Tables']['chores']['Row'] & {
      subtasks: Database['public']['Tables']['subtasks']['Row'][];
    })[]
  >([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChoresAndSubtasks = async () => {
      setLoading(true);
      try {
        let { data: choresData, error } = await supabase.from('chores').select(`
          id,
          title,
          description,
          status,
          created_at,
          updated_at,
          user_id,
          subtasks:subtasks!inner(*)
        `);

        if (error) {
          throw error;
        }

        // Ensures that choresData is never null when setting the state
        setChores(choresData || []);
      } catch (error) {
        console.error('Error fetching chores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChoresAndSubtasks();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        chores.map((chore) => <Chore key={chore.id} chore={chore} />)
      )}
    </div>
  );
};

export default ChoreList;
