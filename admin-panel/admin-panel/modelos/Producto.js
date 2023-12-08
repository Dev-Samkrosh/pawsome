import mongoose, {model, Schema, models} from "mongoose";

const productoSchema = new Schema({
    nombre: {type: String, required:true},
    descripcion: {type: String},
    precio: {type: Number, required:true},
    imagenes: [{type:String}],
    categoria: {type:mongoose.Types.ObjectId, ref:'Category'},
    propiedades: {type:Object},
}, {
    timestamps: true,
  });

export const Producto = models.Producto || model('Producto',productoSchema);