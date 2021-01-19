const express = require('express');
const { verificaToken, verificaAdmin_Role, verificaProducer_Role, verificaHoreca_Role } = require('../middlewares/autenticacion');

const app = express();

let Horeca = require('../models/horeca');
let Usuario = require('../models/usuario');

//LISTAR HORECAS EN GENERAL => TODOS HORECAS
app.get('/horeca', [verificaToken], (req, res) => {
  Horeca.find({ status: true })
  .sort('nombre')
  .populate('usuario')
  .exec((err, horeca) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      horeca
    })
  });
})


//AÑADIR DATOS DE USUARIO
app.post('/horeca', [verificaToken], (req, res) => {
  let body = req.body;

  let horeca = new Horeca({
    nombre: body.nombre,
    zonaubicacionGranada: body.zonaubicacion,
    otraszonas: body.otraszonas,
    tiponegocio: body.tiponegocio,
    direccion: body.direccion,
    poblacion: body.poblacion,
    codigopostal: body.codigopostal,
    telefono: body.telefono,
    web: body.web,
    descripcion:  body.descripcion,
    emailcompras: body.emailcompras,
    atencionproveedores: body.atencionproveedores,
    nombreresponsablecompras:body.nombreresponsablecompras,
    categoriasdeinteres: body.categoriasdeinteres,
    usuario: req.usuario._id,
    logo : body.logo,
    header : body.header,
    gallery : body.gallery,
  });

  horeca.save((err, horecaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!horecaDB){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    console.log(req.usuario._id)
    Usuario.findByIdAndUpdate({_id: req.usuario._id}, { $push: { horecaData: horeca }}, (err, success) =>{
    
      if(err){
        console.log(err)
      } 
      if (success){
        console.log('ok', success)
      }
    });

    res.status(201).json({
      ok: true,
      horeca: horecaDB 
    })
  })
})

//  UN USUARIO por ID =>
app.get('/horeca/:id', (req, res) => {
  let id = req.params.id;

  Horeca.findById({ _id: id })
  .sort('nombre')
  .populate('usuario')
    .exec((err, horeca) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      horeca
    })
  });
})


// MODIFICAR UN USUARIO =>
app.put('/horeca/:id', [verificaToken], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let horeca = {
    nombre: body.nombre,
    zonaubicacionGranada: body.zonaubicacion,
    otraszonas: body.otraszonas,
    tiponegocio: body.tiponegocio,
    direccion: body.direccion,
    poblacion: body.poblacion,
    codigopostal: body.codigopostal,
    telefono: body.telefono,
    web: body.web,
    descripcion:  body.descripcion,
    emailcompras: body.emailcompras,
    atencionproveedores: body.atencionproveedores,
    nombreresponsablecompras:body.nombreresponsablecompras,
    categoriasdeinteres: body.categoriasdeinteres,
    logo : body.logo,
    header : body.header,
    gallery : body.gallery,
  };
  
  Horeca.findByIdAndUpdate(id, horeca, {new: true, runValidators: true}, (err, horecaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!horecaDB){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    Usuario.findByIdAndUpdate({_id: req.usuario._id}, { $push: { horecaData: horeca }}, (err, success) =>{
    
      if(err){
        console.log(err)
      } 
      if (success){
        console.log('ok', success)
      }
    });

    res.status(201).json({
      ok: true,
      horeca: horecaDB 
    })

    res.json({
      ok: true,
      horeca: horecaDB 
    })
  })
})

app.delete('/horeca/:id', [verificaToken], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  horeca.findByIdAndRemove(id, (err, horecaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!horecaDB){
      return res.status(500).json({
        ok: false,
        err : {
          message: 'El Negocio no existe'
        } 
      })
    }
    res.json({
      ok: true,
      message: 'Negocio Borrado'
    })
  })
})

// BÚSQUEDA DE HORECAS
app.get('/horeca/buscar/:termino' , [verificaToken], (req, res) => {

  let termino= req.params.termino;
  let regex = new RegExp(termino, 'i');

  Horeca.find({ $and: [ { $or: [{zonaubicacionGranada: regex}, {tiponegocio: regex}, {categoriasdeinteres: regex}, {otraszonas: regex}] } ] })
    .sort('nombre')
    .populate('categoria', 'nombre')
    .populate('usuario', 'nombre')
    .populate('producto', 'nombre')
    .exec( (err, horeca) => {
      if(err){
        return res.status(500).json({
          ok: false,
          err 
        })
      }
      res.json({
        ok: true,
        horeca
      })
    })    
})

module.exports = app;