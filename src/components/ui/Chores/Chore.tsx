'use client';
import React from 'react';
import { Database } from '@/lib/database.types';
import SubHeading from '../SubHeading';

// Define the props for the Chore component using the structure of your database types
interface ChoreProps {
  chore: Database['public']['Tables']['chores']['Row'] & {
    subtasks: Database['public']['Tables']['subtasks']['Row'][];
  };
}

//The date is ugly and needs to be formatted. Created a helper function to format the date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};


const Chore: React.FC<ChoreProps> = ({ chore }) => {
  return (
    <div className="bg-base-200 rounded border-2 p-4 m-4 relative shadow-lg card-compact">
      <div className="title">
        <SubHeading title={chore.title} />
      </div>
      <div className="card-body">
        <p>{chore.description}</p>
        <div>
          Status: <span className="badge badge-error">{chore.status}</span>
        </div>
        <div>
          Assigned: Assigned:{' '}
          <span className="badge badge-info">
            {chore.created_at ? formatDate(chore.created_at) : ''}
          </span>
        </div>
        <div>
          Last Updated:{' '}
          <span className="badge badge-info">{chore.updated_at ? formatDate(chore.updated_at) : ''}</span>
        </div>
        <div className="mt-4">
          <h3 className="underline">Subtasks:</h3>
          <ul>
            {chore.subtasks.map((subtask) => (
              <li key={subtask.id} className="list-disk list-inside">
                {subtask.title} - {subtask.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chore;
