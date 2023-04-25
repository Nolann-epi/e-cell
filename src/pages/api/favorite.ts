import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'PUT') {
      const { currentUser } = await serverAuth(req, res);

      const { itemID } = req.body;
      const existingItem = await prismadb.item.findUnique({
        where: {
          id: itemID,
        }
      });
  
      if (!existingItem) {
        throw new Error('Invalid ID');
      }
  
      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoritesItems: {
            push: itemID,
          }
        }
      });
  
      return res.status(200).json(user);
    }

    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);
      
      console.log(req.body);
      const { itemID } = req.body;

      const existingItem = await prismadb.item.findUnique({
        where: {
          id: itemID,
        }
      });

      if (!existingItem) {
        throw new Error('Invalid ID');
      }

      const updatedFavoriteItems = without(currentUser.favoritesItems, itemID);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoritesItems: updatedFavoriteItems,
        }
      });

      return res.status(200).json(updatedUser);
    }
    
    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}