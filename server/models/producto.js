var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String, required: false },
    precioUniSinIva: { type: Number, required: [true, 'El precio únitario sin IVA es necesario'] },
    ivaAplicable: { type: Number, required: [true, 'El precio únitario con IVA es necesario'] },
    precioUniConIva: { type: Number},
    tipoCapacidadEnvaseUni: { type: String, required: true },
    formatoVenta: { type: String, required: true },
    registroSanitario: {type: String},
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    familiaProducto: { type: String, required: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    status: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('Producto', productoSchema);