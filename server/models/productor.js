var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productorSchema = new Schema({
    zonaubicacion: { type: String, required: [true, 'El nombre es necesario'] },
    direccion: { type: String, required: [true, 'Su dirección es necesaria'] },
    poblacion: { type: String, required: [true, 'Su población es necesaria'] },
    codigopostal: { type: Number, required: [true, 'El Código Postal'] },
    telefono: { type: Number, required: [true, 'El precio únitario con IVA es necesario'] },
    web: { type:  String},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    descripcion:  { type: String, required: [true, 'La descripción  es necesaria'] },
    //categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    //familiaProducto: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Producto' }],
});

module.exports = mongoose.model('Productor', productorSchema);