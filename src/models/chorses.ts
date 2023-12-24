import mongoose, { Schema, model, Document } from 'mongoose';

// Interface to define the type for a Chore Document
interface IChore extends Document {
  title: string;
  description: string;
  assignedTo: mongoose.Types.ObjectId;
  status: 'pending' | 'completed';
  rewardPoints: number;
}

const choreSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  rewardPoints: { type: Number, default: 0 },
});

const Chore = model<IChore>('Chore', choreSchema);

export default Chore;
