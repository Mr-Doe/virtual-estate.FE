import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const queryString : Partial<{ [key: string]: string | string[] }> = req.query

    if ( queryString.hasOwnProperty("c") ) {
        const getData = await fetch(`${ process.env.SERVER_IP }/admin/map/dist-${ queryString.c }`, {cache : "no-store"})
        const resutlData = await getData.json()
    
        res.status(200).json(resutlData)
        return
    }
    res.status(200)
}