//src/pages/api/users/create.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import User from '@/models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const user = await User.create(req.body); // Add validation as needed
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        // If the caught error is not an instance of Error
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
