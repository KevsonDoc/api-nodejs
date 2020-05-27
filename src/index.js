const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //Criando core da plicação

app.use(bodyParser.json()); //Pra que ele entenda quando enviar uma requisição para minha API em json
app.use(bodyParser.urlencoded({ extended: false })); //Para entender quando eu passar parâmetros

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3000, () => {
    console.log('Tá funfando');
}); //Porta no qual a aplicação estará executando.