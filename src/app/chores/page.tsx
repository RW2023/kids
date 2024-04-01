'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { Database } from '@/lib/database.types';
import ChoreList from '@/components/ui/Chores/Chorelist';
import Loading from '@/components/ui/Loading';

const ChoresPage: React.FC = () => {
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
    <div className="min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <ChoreList chores={chores} />
      )}
    </div>
  );
};

export default ChoresPage;
