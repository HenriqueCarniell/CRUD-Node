const express = require('express');
const app = express();
const porta = 3000;
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes);
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}, acesse http://localhost:3000/index`);
});
