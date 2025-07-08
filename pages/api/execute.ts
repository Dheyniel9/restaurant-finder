// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { convertToCommand } from "@/lib/convertToCommand";
import { searchRestaurants } from "@/lib/searchRestaurants";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.query;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing Parameters' });
  }

  try {
    const command = await convertToCommand(message);
    const results = await searchRestaurants(command.parameters);
    return res.status(200).json(results);
  } catch (err: any) {
    console.error('Error', err.message);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
}
