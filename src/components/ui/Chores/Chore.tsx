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

// Helper function to determine badge class based on chore and subtask status
const getBadgeClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-500 text-white'; // Tailwind classes for completed chores and subtasks
    case 'pending':
      return 'bg-red-500 text-white'; // Tailwind classes for pending chores and subtasks
    case 'in progress':
      return 'bg-blue-500 text-base-content'; // Tailwind classes for in-progress chores and subtasks
    default:
      return 'bg-gray-500 text-black'; // Tailwind classes for undefined statuses
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
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 ${getBadgeClass(
              chore.status,
            )}`}
          >
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
          <ul className="bg-base-100 rounded p-1 border border-1">
            {chore.subtasks.map((subtask) => (
              <li className="m-1" key={subtask.id}>
                {subtask.title} -{' '}
                <span
                  className={`badge ${getBadgeClass(
                    subtask.status,
                  )} p-2 text-xs font-bold`}
                >
                  {subtask.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chore;
