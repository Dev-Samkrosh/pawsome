import mongoose, { model, Schema, models } from "mongoose"; // Importación de Mongoose

// Definición del esquema del producto usando Schema de Mongoose
const productoSchema = new Schema({
    nombre: { type: String, required: true }, // Nombre del producto (obligatorio)
    descripcion: { type: String }, // Descripción del producto
    precio: { type: Number, required: true }, // Precio del producto (obligatorio)
    imagenes: [{ type: String }], // Lista de URLs de imágenes del producto
    categoria: { type: mongoose.Types.ObjectId, ref: 'Category' }, // Referencia a la categoría del producto
    propiedades: { type: Object }, // Otras propiedades del producto en un objeto
}, {
    timestamps: true, // Se incluyen campos de tiempo de creación y actualización automáticamente
});

// Se exporta el modelo Producto si ya existe o se crea uno nuevo usando el esquema definido
export const Producto = models.Producto || model('Producto', productoSchema);
