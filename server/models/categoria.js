const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema; 

const categoriaSchema = new Schema({
  nombre: {type: String, maxlenght: 50, unique: true, require: [true, 'El nombre de categoría es necesario']},
  usuario: {type: Schema.Types.ObjectId, ref: 'Usuario' },
  familias: [{type: String}], 
  status: {type: Number, default: 1},
  createdAt: {type:Date, default:Date.now},
  updatedAt: {type:Date, default:Date.now}
});  
  
module.exports = mongoose.model('Categoria', categoriaSchema);