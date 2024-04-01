//src/components/ui/Chores/forms/SubTaskForm.tsx
'use client';
import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient'; // Adjust this import path as necessary

interface SubtaskFormProps {
  choreId: number;
}

const SubtaskForm: React.FC<SubtaskFormProps> = ({ choreId }) => {
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('pending');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitted(false);

    const { data, error } = await supabase
      .from('subtasks')
      .insert([{ title, status, chore_id: choreId }]);

    if (error) {
      console.error('Error adding subtask:', error.message);
    } else {
      console.log('Subtask added!', data);
      setIsSubmitted(true);
      // Optionally, reset the form fields
      setTitle('');
      setStatus('pending');
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {isSubmitted && (
          <div className="alert alert-success">Subtask added successfully!</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Subtask Title</span>
            </label>
            <input
              type="text"
              id="title"
              className="input input-bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label" htmlFor="status">
              <span className="label-text">Subtask Status</span>
            </label>
            <select
              id="status"
              className="select select-bordered"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Subtask
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubtaskForm;
