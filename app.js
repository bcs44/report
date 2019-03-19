
//Constantes
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/db');
const port = 7000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  require('./routes')(app, database);

  app.listen(port, () => {
    console.log('Servidor ativo na porta: ' + port);
  });

})
