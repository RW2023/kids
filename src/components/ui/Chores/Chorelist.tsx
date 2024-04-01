import React from 'react';
import { Database } from '@/lib/database.types';
import Chore from './Chore';

interface ChoreListProps {
  chores: (Database['public']['Tables']['chores']['Row'] & {
    subtasks: Database['public']['Tables']['subtasks']['Row'][];
  })[];
}

const ChoreList: React.FC<ChoreListProps> = ({ chores }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
      {chores.map((chore) => (
        <Chore key={chore.id} chore={chore} />
      ))}
    </div>
  );
};

export default ChoreList;
