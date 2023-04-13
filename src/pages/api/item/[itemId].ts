import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    console.log("test")
    try {
        const {itemId} = req.query;
        if (typeof itemId !== 'string') {
            throw new Error('Invalid itemID');
        }
        if (!itemId) {
            throw new Error('Missing itemID');
        }
        const item = await prismadb.item.findUnique({
            where: {
                id: itemId,
            }
        });
        if (!item) {
            throw new Error('Invalid itemID');
        }
        return res.status(200).json(item);
    }
    catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}