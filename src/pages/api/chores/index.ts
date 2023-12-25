// pages/api/chores/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Chore from '@/models/chore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const chores = await Chore.find({});
      res.status(200).json(chores);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else if (req.method === 'POST') {
    try {
      const chore = new Chore(req.body);
      await chore.save();
      res.status(201).json(chore);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Failed to create chore' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
