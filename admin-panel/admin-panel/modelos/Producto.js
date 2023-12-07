import {model, Schema, models} from "mongoose";

const productoSchema = new Schema({
    nombre: {type: String, required:true},
    descripcion: String,
    precio: {type: Number, required:true}
})

export const Producto = models.Producto || model('Producto',productoSchema);