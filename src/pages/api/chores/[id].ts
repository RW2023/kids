import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Chore from '@/models/chore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === 'PUT') {
    try {
      const chore = await Chore.findByIdAndUpdate(id, req.body, { new: true });
      if (!chore) {
        return res.status(404).json({ error: 'Chore not found' });
      }
      res.status(200).json(chore);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const chore = await Chore.findByIdAndDelete(id);
      if (!chore) {
        return res.status(404).json({ error: 'Chore not found' });
      }
      res.status(200).json({ message: 'Chore deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
