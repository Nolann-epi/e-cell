import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        const items = await prismadb.item.findMany({
        });
    return res.status(200).json(items);

    }
    catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}