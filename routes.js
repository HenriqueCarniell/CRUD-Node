const express = require('express');
const route = express.Router();
const logincontroller = require('./src/controllers/logincontroller');
const homecontroller = require('./src/controllers/homecontroller');
const contratocontroller = require('./src/controllers/contratocontroller');

route.get('/login/index', logincontroller.login);
route.post('/login/index', logincontroller.loginAnswer);

route.get('/index', homecontroller.home);

route.get('/cadastrar/contrato', contratocontroller.contrato);
route.post('/cadastrar/contrato', contratocontroller.contratoanswer);

module.exports = route;