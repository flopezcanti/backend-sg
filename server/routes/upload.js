const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
app.use( fileUpload({useTempFiles: true}));

const Usuario = require('../models/usuario');

app.put('/upload/:tipo/:id', (req, res) => {

  let tipo = req.params.tipo;
  let id = req.params.id;

  if (!req.files) {
    return res.status(400).json({
      ok: false,
      err
    })
  }
  //Validar tipo:
  let tiposValidos = ['logos', 'headers', 'galleries']

  if(tiposValidos.indexOf(tipo) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message: ` ${tiposValidos.join(', ')}`
      }
    })
  }

  let archivo = req.files.archivo;
  let nameAndExtension = archivo.name.split('.');
  let extension = nameAndExtension[nameAndExtension.length - 1];

  let extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];

  if (extensionesValidas.indexOf(extension) < 0 ) {
    return res.status(400).json({
      ok: false,
      err: {
        message: `Tipo de archivo no permitido. Los tipos de archivo permitidos son: ${extensionesValidas.join(', ')}`
      }
    })
  }

  //Cambiar Nombre Archivo

  let nombreArchivo = `${ id}-${ new Date().getMilliseconds()}.${extension}`

  archivo.mv(`uploads/${tipo}/${ nombreArchivo }`, (err) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      })
    }

    // Imagen Cargada. Asignamos imagenes al usuario en función si es Galería, Header o Logo

    if(tipo === 'logos' ){ imgLogo(id, res, nombreArchivo)};
    if(tipo === 'headers' ){imgHeader(id, res, nombreArchivo)};
    
  })
})

function imgLogo(id, res, nombreArchivo) {
  Usuario.findById(id, (err, usuarioDB) => {
    if(err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!usuarioDB){
      return res.status(400).json({
        ok: false,
        err
      })
    }

    usuarioDB.logo = nombreArchivo;
    usuarioDB.save((err, usuarioDB) => {
      res.json({
        ok: true,
        usuario: usuarioDB,
        logo: nombreArchivo
      })
    })
  })
}

function imgHeader(id, res, nombreArchivo) {
  Usuario.findById(id, (err, usuarioDB) => {
    if(err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!usuarioDB){
      return res.status(400).json({
        ok: false,
        err
      })
    }

    usuarioDB.header = nombreArchivo;
    usuarioDB.save((err, usuarioDB) => {
      res.json({
        ok: true,
        usuario: usuarioDB,
        header: nombreArchivo
      })
    })
  })
}

function imgGallery() {
  
}

module.exports = app;