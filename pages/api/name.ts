import type { NextApiRequest, NextApiResponse } from "next";
import type { Application } from "../../interfaces";
import { supabase } from '../../utils/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Application>,
) {
  const { query, method } = req;
  const { data, error } = await supabase
    .from('app_data')
    .select('name')
    .single();

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ name: data.name });
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
