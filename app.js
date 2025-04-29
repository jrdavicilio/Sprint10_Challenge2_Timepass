const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const endRoute = require('./routes/endRoute');
const hourMiddleware = require('./middlewares/horaMiddleware');
const validateHour = require('./middlewares/validarHora');

app.use(hourMiddleware);

app.use('/', indexRouter);
app.use('/endroute', validateHour, endRoute);

app.listen(3000, () => {
    console.log('App.js está escuchando en el puerto http://localhost:3000');
});