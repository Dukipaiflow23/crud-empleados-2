const express= require('express');
const morgan= require('morgan');
const mysql= require('mysql');
const myConnection= require('express-myconnection')

const app=express();
const cors= require('cors');

// Importando Rutas
const empleadosRouter=require('./routes/empleados.router');

app.set('port',3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));

app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'gds0431'
}, 'single' ));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('./routes/empleados.router'));

//archivos estaticos
module.exports= app;