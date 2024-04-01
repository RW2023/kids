//src/components/ui/Chores/forms/ChoreForm.tsx
'use client';

import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

const ChoreForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    const { data, error } = await supabase
      .from('chores')
      .insert([{ title, description, status }]);

    if (error) {
      console.error('Error adding chore:', error.message);
    } else {
      console.log('Chore added!', data);
      setIsSubmitted(true);
      setTitle('');
      setDescription('');
      setStatus('pending');
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <div className="card-body">
        {isSubmitted && (
          <div className="alert alert-success mb-4">
            Chore added successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
          <label className="label" htmlFor="title">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />

          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered h-24"
            required
          />

          <label className="label" htmlFor="status">
            <span className="label-text">Status</span>
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Chore
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChoreForm;
