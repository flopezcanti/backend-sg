const express = require('express');
const { verificaToken, verificaAdmin_Role, verificaProducer_Role, verificaHoreca_Role } = require('../middlewares/autenticacion');

const app = express();

let Horeca = require('../models/horeca');
let Usuario = require('../models/usuario');

//LISTAR PRODUCTORES EN GENERAL => TODOS HORECAS
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
app.post('/horeca', [verificaToken, verificaHoreca_Role], (req, res) => {
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
      productor: horecaDB 
    })
  })
})

//  UN USUARIO por ID =>
app.get('/horeca/:id', (req, res) => {
  let id = req.params.id;

  Horeca.findById({ _id: id },{ status: true })
  .sort('nombre')
  .populate('usuario')
  .populate('horeca')
  .populate('horecaData')
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


// // MODIFICAR UN USUARIO =>
// app.put('/productor/:id', [verificaToken, verificaProducer_Role], (req, res) => {
//   let id = req.params.id;
//   let body = req.body;


//   let productor = {
//     zonaubicacion: body.zonaubicacion,
//     direccion: body.direccion,
//     poblacion: body.poblacion,
//     codigopostal: body.codigopostal,
//     telefono: body.telefono,
//     web: body.web,
//     descripcion: body.descripcion,
//     familiaProducto: body.familiaProducto,
//   }; 
  
//   Productor.findByIdAndUpdate(id, productor, {new: true, runValidators: true}, (err, productorDB) => {
//     if(err){
//       return res.status(500).json({
//         ok: false,
//         err
//       })
//     }
//     if(!productorDB){
//       return res.status(500).json({
//         ok: false,
//         err
//       })
//     }
//     Usuario.findByIdAndUpdate({_id: req.usuario._id}, { $push: { productorData: productor }}, (err, success) =>{
    
//       if(err){
//         console.log(err)
//       } 
//       if (success){
//         console.log('ok', success)
//       }
//     });

//     res.status(201).json({
//       ok: true,
//       productor: productorDB 
//     })

//     res.json({
//       ok: true,
//       productor: productorDB 
//     })
//   })
// })

// app.delete('/productor/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
//   let id = req.params.id;
//   let body = req.body;

//   productor.findByIdAndRemove(id, (err, productorDB) => {
//     if(err){
//       return res.status(500).json({
//         ok: false,
//         err
//       })
//     }
//     if(!productorDB){
//       return res.status(500).json({
//         ok: false,
//         err : {
//           message: 'El productor no existe'
//         } 
//       })
//     }
//     res.json({
//       ok: true,
//       message: 'Productor Borrado'
//     })
//   })
// })

// // BÚSQUEDA DE PRODUCTORES
// app.get('/productor/buscar/:termino' , [verificaToken, verificaHoreca_Role], (req, res) => {

//   let termino= req.params.termino;
//   let regex = new RegExp(termino, 'i');

//   Productor.find({ $and: [ { $or: [{nombre: regex}, {descripcion: regex}, {familiaProducto: regex}] } ] })
//     .sort('nombre')
//     .populate('categoria', 'nombre')
//     .populate('usuario', 'nombre')
//     .populate('producto', 'nombre')
//     .exec( (err, productores) => {
//       if(err){
//         return res.status(500).json({
//           ok: false,
//           err 
//         })
//       }
//       res.json({
//         ok: true,
//         productores
//       })
//     })    
// })

module.exports = app;