import {model, models, Schema} from "mongoose";

const ordenSchema = new Schema({
  line_items:Object,
  nombre:String,
  email:String,
  ciudad:String,
  codigoPostal:String,
  direccion:String,
  pais:String,
  pagado:Boolean,
}, {
  timestamps: true,
});

export const Orden = models?.Orden || model('Orden', ordenSchema);