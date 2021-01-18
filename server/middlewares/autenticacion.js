const jwt = require('jsonwebtoken');
const { response } = require('../routes/login');
// ============================
// VERIFY TOKEN
// ============================

function verificaToken(req, res, next) {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err){
      return res.status(401).json({
        ok: false, 
        err: {
          message: 'Token no válido'
        }
      })
    }
    req.usuario = decoded.usuario
    next();
  })
}

function verificaAdmin_Role (req, res, next) {
  let usuario = req.usuario;
  let role = usuario.role;

  if(role === 'ADMIN_ROLE' ) {
    next()
  } else {
    return res.status(401).json({
      ok: false, 
      err: {
        message: 'El usuario No es Administrador'
      }
    })
  }
}

function verificaProducer_Role (req, res, next) {
  let usuario = req.usuario;
  let role = usuario.role;

  if(role === 'PRODUCER_ROLE' ) {
    next()
  } else if (role === 'ADMIN_ROLE'){
    next()
  } else {
    return res.status(401).json({
      ok: false, 
      err: {
        message: 'El usuario no tiene permitida esta acción'
      }
    })
  }
}

function verificaHoreca_Role (req, res, next) {
  let usuario = req.usuario;
  let role = usuario.role;

  if(role === 'HORECA_ROLE' ) {
    next()
  } else if (role === 'ADMIN_ROLE'){
    next()
  } else {
    return res.status(401).json({
      ok: false, 
      err: {
        message: 'El usuario no tiene permitida esta acción'
      }
    })
  }
}

module.exports = {
  verificaToken,
  verificaAdmin_Role,
  verificaHoreca_Role, 
  verificaProducer_Role
}