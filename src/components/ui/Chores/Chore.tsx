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

// Helper function to format the date
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

// Helper function to determine badge class based on chore status
const getBadgeClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'badge-success'; // Green for completed chores
    case 'pending':
      return 'badge-error';   // Red for pending chores
    case 'in progress':
      return 'badge-info';    // Blue or any other color for in-progress chores
    default:
      return 'badge-secondary'; // Gray or any other neutral color for undefined statuses
  }
};


const Chore: React.FC<ChoreProps> = ({ chore }) => {
  return (
    <div className="bg-base-100 rounded border-2 p-4 m-4 relative shadow-lg card-compact">
      <div className="title bg-base-300 rounded">
        <SubHeading title={chore.title} />
      </div>
      <div className="card-body bg-base-300 rounded-md shadow-lg">
        <p>{chore.description}</p>
        <div>
          Status:{' '}
          <span className={`badge ${getBadgeClass(chore.status)}`}>
            {chore.status}
          </span>
        </div>
        <div>
          Assigned:{' '}
          <span className="badge badge-info p-5 text-xs font-bold">
            {chore.created_at ? formatDate(chore.created_at) : 'N/A'}
          </span>
        </div>
        <div>
          Last Updated:{' '}
          <span className="badge badge-info p-5 text-xs font-bold">
            {chore.updated_at ? formatDate(chore.updated_at) : 'N/A'}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="underline">Subtasks:</h3>
          <ul className="bg-base-100 rounded p-4 border border-1">
            {chore.subtasks.map((subtask) => (
              <li key={subtask.id}>
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
