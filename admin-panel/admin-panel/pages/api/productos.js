import { Producto } from "@/modelos/Producto"; // Importación del modelo Producto
import { mongooseConnect } from "../../lib/mongoose"; // Importación de la función de conexión a MongoDB

export default async function handle(req, res) {
    const { method } = req; // Método HTTP de la solicitud

    await mongooseConnect(); // Conexión a la base de datos MongoDB

    if (method === 'GET') {
        if (req.query?.id) {
            // Obtener un producto por su ID
            res.json(await Producto.findOne({ _id: req.query.id }));
        } else {
            // Obtener todos los productos
            res.json(await Producto.find());
        }
    }

    if (method === 'POST') {
        // Crear un nuevo producto con los datos del cuerpo de la solicitud
        const { nombre, descripcion, precio, imagenes, categoria, propiedades } = req.body;
        const productoDoc = await Producto.create({
            nombre,
            descripcion,
            precio,
            imagenes,
            categoria,
            propiedades
        });
        res.json(productoDoc);
    }

    if (method === 'PUT') {
        // Actualizar un producto por su ID con los datos del cuerpo de la solicitud
        const { nombre, descripcion, precio, imagenes, categoria, propiedades, _id } = req.body;
        await Producto.updateOne({ _id }, { nombre, descripcion, precio, imagenes, categoria, propiedades }); // Actualización del producto
        res.json(true); // Se responde con 'true' para indicar éxito
    }

    if (method === 'DELETE') {
        // Eliminar un producto por su ID
        if (req.query?.id) {
            await Producto.deleteOne({ _id: req.query?.id });
            res.json(true); // Se responde con 'true' para indicar éxito
        }
    }
}