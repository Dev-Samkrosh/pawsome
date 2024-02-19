import {mongooseConnect} from "@/lib/mongoose";
import { Orden } from "@/modelos/Ordenes";

export default async function handler(req,res) {
  await mongooseConnect();
  res.json(await Orden.find().sort({createdAt:-1}));
}