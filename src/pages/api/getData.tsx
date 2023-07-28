import { NextApiRequest, NextApiResponse } from 'next';

var axios = require('axios');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    var config = {
      method: 'get',
      url: `http://15.165.74.54:3000/?page=${req.query.page}`,
      headers: {},
    };

    const result = await axios(config);
    res.status(200).json({ ...result.data });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}
