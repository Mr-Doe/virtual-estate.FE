import { NextApiRequest, NextApiResponse } from "next";

export default async function handiler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.url as string
    const queryString = url.substring(url.lastIndexOf("/")+1) // 마지막 "/"를 포함하지 않는 문자열

    const getData = await fetch(`${ process.env.SERVER_IP }/admin/map/dist-1`)
    const resutlData = await getData.json()

    res.status(200).json(resutlData)
}