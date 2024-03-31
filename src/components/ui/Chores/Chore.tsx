import { FC } from 'react';
import { motion } from 'framer-motion';
import SubHeading from '@/components/ui/SubHeading';
import Loading from '@/components/ui/Loading';


const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface Props {
    isLoading: boolean;
    chores: typeof Chore[];
}

const Chore: FC<Props> = ({isLoading}): JSX.Element => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        className="container mx-auto p-6 min-h-screen"
      >
        <SubHeading title="Chores list" iconClass="fas fa-clipboard-list" />

        {isLoading ? (
          <Loading />
        ) : (
          chores.map((chore) => (
            <div
              key={chore.id}
              className="bg-base-200 rounded-box border-2 p-4 m-4 relative shadow-lg"
            >
              <div className="font-bold text-xl mb-2">{chore.title}</div>
              <p>{chore.description}</p>
              <p>
                Status:
                <span className="badge-primary p-1 rounded border border-1 m-1">
                  {' '}
                  {chore.status}
                </span>
              </p>
              <p>
                Created at:
                <span className="badge caution p-1 rounded border border-1 m-1">
                  {' '}
                  {chore.created_at}
                </span>
              </p>
              <p>
                Updated at:{' '}
                <span className="badge-primary p-1 rounded border m-1">
                  {chore.updated_at}
                </span>
              </p>
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
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Chore;