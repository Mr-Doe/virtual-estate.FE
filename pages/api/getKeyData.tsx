import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiSecret = {
        sign: process.env.SIGNATURE,
        apiKey: process.env.KAKAO_API_KEY
    }

    res.status(200).json(apiSecret)
}