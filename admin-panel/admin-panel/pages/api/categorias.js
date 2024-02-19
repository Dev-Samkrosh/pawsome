import {mongooseConnect} from "@/lib/mongoose";
import { Categoria } from "@/modelos/Categoria";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();

  if (method === 'GET') {
    res.json(await Categoria.find().populate('padre'));
  }

  if (method === 'POST') {
    const {nombre,categoriaPadre,propiedades} = req.body;
    const categoriaDoc = await Categoria.create({
      nombre,
      padre: categoriaPadre || undefined,
      propiedades,
    });
    res.json(categoriaDoc);
  }

  if (method === 'PUT') {
    const {nombre,categoriaPadre,propiedades,_id} = req.body;
    const categoriaDoc = await Categoria.updateOne({_id},{
        nombre,
        padre: categoriaPadre || undefined,
        propiedades,
    });
    res.json(categoriaDoc);
  }

  if (method === 'DELETE') {
    const {_id} = req.query;
    await Categoria.deleteOne({_id});
    res.json('ok');
  }
}