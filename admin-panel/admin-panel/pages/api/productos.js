import { Producto } from "@/modelos/Producto";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    
    if (method === 'GET') {
        if (req.query?.id) {
          res.json(await Producto.findOne({_id:req.query.id}));
        } else {
          res.json(await Producto.find());
        }
      
      }

    if (method === 'POST') {
        const {nombre,descripcion,precio} = req.body;

        const productoDoc = await Producto.create({
            nombre,descripcion,precio,
        });
        res.json(productoDoc);
    }

    if (method === 'PUT') {
      const {nombre,descripcion,precio,_id} = req.body;
      await Producto.updateOne({_id},{nombre,descripcion,precio}); //Ya funciona
      res.json(true);
    }

    if (method === 'DELETE') {
      if (req.query?.id) {
        await Producto.deleteOne({_id:req.query?.id});
        res.json(true);
      }
      
    }
}