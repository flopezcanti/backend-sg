require('./config/config');
require('./routes/index');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const json = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//middleware 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(require('./routes/index'));
app.use(express.static('public'));

//mongoose conection
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log('DataBase ONLINE'))
  .catch( err => console.log('Problem!', err))

app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto ${process.env.PORT}`)
})