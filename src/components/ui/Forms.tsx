import { FC } from 'react';
import SubHeading from './SubHeading';
import ChoreForm from './Chores/forms/ChoreForm';
import SubtaskForm from './Chores/forms/SubTaskForm';

interface Props {}

const Forms: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-base-100">
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className=" rounded-lg overflow-hidden p-6 mx-auto">
            <ChoreForm />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="rounded-lg overflow-hidden p-6 mx-auto">
            <SubtaskForm choreId={1} />{' '}
            {/* Replace 1 with the actual choreId */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
