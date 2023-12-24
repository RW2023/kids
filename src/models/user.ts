import mongoose, { Schema, model, Document } from 'mongoose';

// Interface to define the type for a User Document
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'parent' | 'child';
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['parent', 'child'], required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
