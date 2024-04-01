import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

const SubtaskForm = ({ choreId }: { choreId: number }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Insert subtask into the database
    const { data, error } = await supabase
        .from('subtasks')
        .insert([{ title, status, chore_id: choreId }]);

    if (error) {
        console.log(error.message);
    } else {
        console.log('Subtask added!', data);
        // Reset the form or handle success
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Subtask Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Subtask Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Subtask</button>
    </form>
  );
};

export default SubtaskForm;
