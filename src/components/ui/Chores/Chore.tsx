import React from 'react';
import { Database } from '@/lib/database.types'; 

// Define the props for the Chore component using the structure of your database types
interface ChoreProps {
  chore: Database['public']['Tables']['chores']['Row'] & {
    subtasks: Database['public']['Tables']['subtasks']['Row'][];
  };
}

const Chore: React.FC<ChoreProps> = ({ chore }) => {
  return (
    <div className="bg-base-200 rounded-box border-2 p-4 m-4 relative shadow-lg">
      <div className="font-bold text-xl mb-2">{chore.title}</div>
      <p>{chore.description}</p>
      <div>
        Status: <span className="badge badge-primary">{chore.status}</span>
      </div>
      <div>
        Created at: <span className="badge badge-info">{chore.created_at}</span>
      </div>
      <div>
        Updated at: <span className="badge badge-info">{chore.updated_at}</span>
      </div>
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
  );
};

export default Chore;
