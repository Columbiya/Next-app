// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils";

interface MessageNextApiReq extends NextApiRequest {
  query: {
    message?: string
  }
}

export default function handler(req: MessageNextApiReq, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}
