//importo express
const express=require('express');
const routes=require('./routes')
const path=require('path');
const sql=require('./config/database');
const bodyParser=require('body-parser');
require('dotenv').config({path:'variables.env'})

const app=express();
const configs=require('./config');

var test = sql.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
 

//db.authenticate().then(()=>console.log('DB Conectada').catch(error=>console.log(error));

//mando pug
app.set('view engine','pug');

//templates:
app.set('views',path.join(__dirname,'./views'));

//cargar una carpeta static public:

app.use(express.static('public'));

//dev o prod
const config=configs[app.get('env')];

//var sitio web.
app.locals.titulo=config.nombreSitio

//muestra el año actual y ruta
app.use((req,res,next)=>{
    //new date
    const fecha=new Date();
    res.locals.fechaActual=fecha.getFullYear();
    res.locals.ruta=req.path;
    console.log(res.locals);
    
    return next();

})
//ejecuto bodyp
app.use(bodyParser.urlencoded({extended:true}));
//cargar rutas
app.use('/',routes());


//puerto host
const host=process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('El servidor esta funcionando');
});