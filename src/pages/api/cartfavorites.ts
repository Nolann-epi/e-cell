import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    const favoriteItems = await prismadb.item.findMany({
      where: {
        id: {
          in: req.body.data,
        }
      }
    });

    return res.status(200).json(favoriteItems);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}