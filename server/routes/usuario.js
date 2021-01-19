const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const { verificaToken, verificaAdmin_Role, verificaProducer_Role, verificaHoreca_Role } = require('../middlewares/autenticacion');

const app = express();

app.get('/usuario',  [verificaToken],  (req, res) => {

  let desde = req.query.desde || 0;
  desde = Number(desde);
  
  let limite = req.query.limite || 9;
  limite = Number(limite);

  Usuario.find({status: true})
          // .populate('productor')
          // .populate('productorData')
          .skip(desde)
          .limit(limite)
          .exec((err, usuarios) => {
            if(err){
              return res.status(400).json({
                ok: false,
                err
              })
            }

            Usuario.countDocuments({status: true}, (err, conteo) => {
              res.json({
                ok: true,
                cuantos: conteo,
                usuarios
              })
            })
          })
})

//  UN USUARIO por ID =>
app.get('/usuario/:id', (req, res) => {
  let id = req.params.id;

  Usuario.findById({ _id: id },{ status: true })
  .populate('productor')
  .populate('productorData')

    .exec((err, usuario) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      usuario
    })
  });
})


//AÑADIR DATOS BÁSICOS DE USUARIO
app.post('/usuario', [verificaToken], function (req, res) {
  let body = req.body;

  let usuario = new Usuario ({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  })

  usuario.save((err, usuarioDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      usuario: usuarioDB 
    })
  })
})
// [verificaToken],
app.put('/usuario/:id',  function (req, res) {
  let id = req.params.id;
  let body = req.body;
  //_.pick(req.body, ['nombre', 'email', 'logo', 'header', 'gallery', 'role', 'status']);
  //, runValidators: true
  Usuario.findByIdAndUpdate(id, body, {new: true}, (err, usuarioDB) => {

    if (err) {
      return res.status(400).json({
        ok: false, 
        err
      })
    }
    res.json({
      ok: true,
      usuario: usuarioDB
    })
  })
})

app.delete('/usuario/:id', [verificaToken], function (req, res) {
  let id = req.params.id;

  let statusChange = {
    status : false
  }
  
  //Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
  Usuario.findByIdAndUpdate(id, statusChange, {new: true}, (err, usuarioBorrado) => {
    if (err) {
      return res.status(400).json({
        ok: false, 
        err
      })
    }

    if (!usuarioBorrado) {
      return res.status(400).json({
        ok: false, 
        err: {
          message: 'Usuario no encontrado'
        }
      })
    }
    res.json({
      ok: true,
      usuario: usuarioBorrado
    })
  })
})

module.exports = app;