const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
  values : ['ADMIN_ROLE', 'PRODUCER_ROLE', 'HORECA_ROLE'],
  message: '{VALUE} , no es un rol de usuario válido'
}

let usuarioSchema = new Schema({
  nombre: { type: String, required: [true, 'El nombre es necesario']},
  email : { type: String, unique: true,required: [true, 'El email es necesario'] },
  password : { type: String, required: [true, 'Password es necesaria'] },
  logo : {type: String, required: false },
  header : { type: String, required: false  },
  role : { type: String, default: 'USER_ROLE', enum: rolesValidos },
  status : { type: Boolean, default: true  },
  productorData: [{ type: Schema.Types.ObjectId, ref: 'Productor' }],
})

//Delete the password in JSON response. The pass exist in the DB but not shown in JSON response
usuarioSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();
  delete userObject.password
  return userObject;
}

usuarioSchema.plugin(uniqueValidator, {message: '{PATH} debe ser único'});
module.exports = mongoose.model('Usuario', usuarioSchema);