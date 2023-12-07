import { Producto } from "@/modelos/Producto";
import { mongooseConnect } from "../lib/mongoose";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();
    
    if (method === 'POST') {
        const {nombre,descripcion,precio} = req.body;

        const productoDoc = await Producto.create({
            nombre,descripcion,precio,
        });
        res.json(productoDoc);
    }
}