import { FC } from 'react';
import SubHeading from '@/components/ui/SubHeading';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container mx-auto p-6">
      <SubHeading title="Dashboard" iconClass="fas fa-tachometer-alt" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Widgets or cards for displaying data */}
        <div className="card bg-base-300 shadow-xl glass text-lg p-6">
          <h2 className="text-xl font-semibold">Task Overview</h2>
          {/* Display task-related information here */}
        </div>

        <div className="card bg-base-300 shadow-xl glass text-lg p-6">
          <h2 className="text-xl font-semibold">Rewards</h2>
          {/* Display reward-related information here */}
        </div>

        {/* Add more widgets or cards for additional data */}
      </div>

      {/* Other dashboard components or sections */}
    </div>
  );
};

export default page;