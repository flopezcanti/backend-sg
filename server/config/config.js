// ============================
// PORT
// ============================
process.env.PORT = process.env.PORT  || 3000;

// ============================
// ENTORNO
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
// TOKEN CONFIG
// ============================
//EXPIRES IN
process.env.CADUCIDAD_TOKEN = '30d';
//SEED
process.env.SEED = process.env.SEED || 'secret-dev-seed';

// ============================
// Base Datos
// ============================
let urlDB; 

// if(process.env.NODE_ENV === 'dev') {
//   urlDB = 'mongodb://localhost:27017/cafe'
// } else {
  urlDB = 'mongodb+srv://saborgranada:Sy5Yp4yx2NZdSDx@cluster0.0euiw.mongodb.net/cafe'
// }
process.env.URLDB = urlDB;