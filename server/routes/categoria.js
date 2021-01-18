const express = require('express');
let { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');

app.get('/categoria', (req, res) => {
  Categoria.find({})
  .sort('nombre')
  .populate('usuario', 'nombre role')
  .exec((err, categorias) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      categorias
    })
    
  });
})

app.get('/categoria/:id', verificaToken,(req, res) => {
  let id = req.params.id;

  Categoria.findById(id, (err, categoriaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!categoriaDB){
      return res.status(500).json({
        ok: false,
        err : {
          message: 'Categoría no encontrada. No existe ese ID de categoría'
        }
      })
    }
    res.json({
      ok: true,
      categoria: categoriaDB 
    })
  });
})

app.post('/categoria', verificaToken, (req, res) => {
  let body = req.body;
  let categoria = new Categoria({
    nombre: body.nombre,
    usuario: req.usuario._id,
    familias: body.familias.split(`, `),
    status: body.status
  });

  categoria.save((err, categoriaDB) => {
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

app.put('/categoria/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let categoria = {
    nombre: body.nombre,
    usuario: req.usuario._id,
    familias: body.familias.split(`, `),
  }; 
  
  Categoria.findByIdAndUpdate(id, categoria, {new: true, runValidators: true}, (err, categoriaDB) => {
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

app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Categoria.findByIdAndRemove(id, (err, categoriaDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!categoriaDB){
      return res.status(500).json({
        ok: false,
        err : {
          message: 'La categoría no existe'
        } 
      })
    }
    res.json({
      ok: true,
      message: 'Categoría Borrada'
    })
  })
})

module.exports = app;