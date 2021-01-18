const express = require('express');
const { verificaToken, verificaAdmin_Role, verificaProducer_Role, verificaHoreca_Role } = require('../middlewares/autenticacion');

const app = express();

let Producto = require('../models/producto');
let Productor = require('../models/productor')

app.get('/producto', [verificaToken, verificaHoreca_Role], (req, res) => {
  Producto.find({ status: true })
  .sort('nombre')
  .populate('categoria', 'nombre familias')

  .exec((err, productos) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      productos
    })
  });
})

app.post('/producto', [verificaToken, verificaProducer_Role], (req, res) => {
  let body = req.body;
  let pvp = function(){
    let psi = parseFloat(body.precioUniSinIva.replace(/,/g, '.'))
    let iva = parseFloat(body.ivaAplicable)
    let pCI = (((psi * iva)/100) + psi )
       return parseFloat(pCI).toFixed(2)
  }

  let producto = new Producto({
    nombre: body.nombre,
    descripcion: body.descripcion,
    precioUniSinIva: body.precioUniSinIva.replace(/,/g, '.'),
    ivaAplicable: parseInt(body.ivaAplicable),
    precioUniConIva: pvp(),
    tipoCapacidadEnvaseUni: body.tipoCapacidadEnvaseUni,
    formatoVenta: body.formatoVenta,
    registroSanitario: body.registroSanitario,
    categoria: body.categoria,
    familiaProducto: body.familiaProducto,
    usuario: req.usuario._id
  });

  producto.save((err, productoDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!productoDB){
      return res.status(500).json({
        ok: false,
        err
      })
    }      
    
    Productor.updateOne({usuario: req.usuario._id}, { $push: { productos: producto }}, (err, success)=>{
      if(err){
        console.log(err)
      }
      if(success){
        console.log('ok', success)
      }
    });

    res.status(201).json({
      ok: true,
      producto: productoDB 
    })
  })
})

app.put('/producto/:id', [verificaToken, verificaProducer_Role], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let pvp = function(){
    let psi = parseFloat(body.precioUniSinIva.replace(/,/g, '.'))
    let iva = parseFloat(body.ivaAplicable)
    let pCI = (((psi * iva)/100) + psi )
       return parseFloat(pCI).toFixed(2)
  }

  let producto = {
    descripcion: body.descripcion,
    precioUniSinIva: body.precioUniSinIva.replace(/,/g, '.'),
    ivaAplicable: parseInt(body.ivaAplicable),
    precioUniConIva: pvp(),
    tipoCapacidadEnvaseUni: body.tipoCapacidadEnvaseUni,
    formatoVenta: body.formatoVenta,
  }; 
  
  Producto.findByIdAndUpdate(id, producto, {new: true, runValidators: true}, (err, categoriaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!categoriaDB){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      categoria: categoriaDB 
    })
  })
})

app.delete('/producto/:id', [verificaToken, verificaProducer_Role], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Producto.findByIdAndRemove(id, (err, productoDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!productoDB){
      return res.status(500).json({
        ok: false,
        err : {
          message: 'El producto no existe'
        } 
      })
    }
    res.json({
      ok: true,
      message: 'Producto Borrado'
    })
  })
})

// BÚSQUEDA DE PRODUCTOS

app.get('/productos/buscar/:termino' , [verificaToken, verificaHoreca_Role], (req, res) => {

  let termino= req.params.termino;
  let regex = new RegExp(termino, 'i');

  Producto.find({ $and: [ { $or: [{nombre: regex}, {descripcion: regex}, {familiaProducto: regex}] } ] })
    .sort('nombre')
    .populate('categoria', 'nombre')
    .populate('usuario', 'nombre')
    .exec( (err, productos) => {
      if(err){
        return res.status(500).json({
          ok: false,
          err 
        })
      }
      res.json({
        ok: true,
        productos
      })
    })    
})

module.exports = app;