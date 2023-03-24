import type { NextApiRequest, NextApiResponse } from 'next'
// import type Settlement from '@/services/townService';
import townService, { Settlement } from '@/services/townService';


export default function handler(
  req: NextApiRequest, res: NextApiResponse<Settlement>
) {
  const town = townService.getTown();
  
  console.log(town)
  res.status(200).json(town)
}