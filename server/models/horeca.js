var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let horecaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    zonaubicacionGranada: { type: String },
    otraszonas: { type: String },
    tiponegocio: { type: String, required: [true, 'Debe seleccionar su tipo de negocio'] },
    direccion: { type: String, required: [true, 'Su dirección es necesaria'] },
    poblacion: { type: String, required: [true, 'Su población es necesaria'] },
    codigopostal: { type: Number, required: [true, 'El Código Postal es requerido'] },
    telefono: { type: Number, required: [true, 'El precio únitario con IVA es necesario'] },
    web: { type:  String},
    descripcion:  { type: String, required: [true, 'La descripción  es necesaria'] },
    emailcompras:{ type:  String, required: [true, 'Debe indicar email'] },
    atencionproveedores: [{ type: String, required: [true, 'Indique los días de atención a proveedores'] }],
    nombreresponsablecompras:{ type: String, required: [true, 'El nombre responsable de compras es necesario'] },
    categoriasdeinteres: [{ type: String, required: [true, 'Necesitamos conocer las categorías que le resultan interesantes']}],
    //familiaProducto: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    logo : {type: String, required: false },
    header : { type: String, required: false  },
    gallery : [{ type: String, required: false  }],
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Horeca', horecaSchema);