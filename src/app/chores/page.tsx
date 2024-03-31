import ChoreList from '@/components/ui/Chores/ChoreList';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <ChoreList />
  );
};

export default page;