import mongoose, {model, models, Schema} from "mongoose";

const categoriaSchema = new Schema({
  nombre: {type:String,required:true},
  padre: {type:mongoose.Types.ObjectId, ref:'Categoria'},
  propiedades: [{type:Object}]
});

export const Categoria = models?.Categoria || model('Categoria', categoriaSchema);