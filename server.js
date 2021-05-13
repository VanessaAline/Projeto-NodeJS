const mongoose = require('mongoose');

require('dotenv').config({path:'veriables.env'}); //usando varivel de ambientes

//Conexão com banco de dados
//mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true});
mongoose.Promise = global.Promise;

mongoose.connection.on('error',(error)=>{
    console.error("ERROR: "+error.message);
});

//Carregando todos o Models
require('./models/Post');

const app = require('./app');

app.set('port', process.env.PORT || 7777); //porta do servidor
const server = app.listen(app.get('port'),()=>{
    console.log("Sevidor rodando na porta: "+server.address().port);
});