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

if(process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe'
} else {
  urlDB = 'mongodb+srv://tatolc:DTgxwtljzygcwMuM@cluster0.fkdi3.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;