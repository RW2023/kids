import mongoose, { Schema, model, Document } from 'mongoose';

// Interface to define the type for a Subtask Document
interface ISubtask extends Document {
  title: string;
  status: 'pending' | 'completed';
}

// Subtask Schema
const subtaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

// Interface to define the type for a Chore Document
interface IChore extends Document {
  title: string;
  description: string;
  assignedTo: mongoose.Types.ObjectId;
  status: 'pending' | 'completed';
  rewardPoints: number;
  subtasks: ISubtask[];
}

// Chore Schema
const choreSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  rewardPoints: { type: Number, default: 0 },
  subtasks: [subtaskSchema], // Adding the subtasks array
});

const Chore = model<IChore>('Chore', choreSchema);

export default Chore;
