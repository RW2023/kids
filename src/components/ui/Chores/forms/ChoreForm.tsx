//src/components/ui/Chores/forms/ChoreForm.tsx
'use client';

import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

const ChoreForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Insert chore into the database
    const { data, error } = await supabase
        .from('chores')
        .insert([{ title, description, status }]);

    if (error) {
        console.log(error.message);
    } else {
        console.log('Chore added!', data);
        // Reset the form or handle success
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Chore</button>
    </form>
  );
};

export default ChoreForm;
