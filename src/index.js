const express = require('express');
const app = express();
const morgan = require('morgan');
// ! SERVER START

// SETTINGS
//Como se crearamos una variable para indicarle el puerto en el server start
app.set('port', process.env.port || 3001);


app.use('/api',require('./routes/index'))


//middlewares
//show response in terminal. Se puede cambiar el formato de como se ve en la terminal cambiando el dev
app.use(morgan('dev'));
// Con esto le decimos que los datos que recibiremos via endpoints seran basicos: booleans, strings, numbers etc... no img
app.use(express.urlencoded({extended: false}))
// formato de los datos json
app.use(express.json());

//Server Start
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT 3001')
});
// ! SERVER END