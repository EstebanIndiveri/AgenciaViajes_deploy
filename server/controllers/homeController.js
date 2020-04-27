const Viaje=require('../models/Viajes');
const Testimonial=require('../models/Testimoniales');

exports.consultaHomePage= async (req,res)=>{
    const viajes=await Viaje.findAll({limit:3});
    const testimoniales=await Testimonial.findAll({limit:3});

    // Viaje.findAll({
    //     limit:3
    // })
    res.render('index',{
        pagina:'Próximos viajes',
        clase: 'home',
        viajes,
        testimoniales
        })
    // .then(viajes=>res.render('index',{
    //     pagina:'Próximos viajes',
    //     viajes,
    //     clase: 'home'
    //     })).catch(error=> console.log(error));
}

// const promises =[];
// promises.push(Viaje.findAll({
//     limit:3
// }) )
// promises.push(Testimonial.findAll({
//     limit:3
// }) )

// //pasar el promise y ejecutamos
// const resultado=Promise.all(promises);

// // Viaje.findAll({
// //     limit:3
// // })
// resultado.then(resultado=>res.render('index',{
//     pagina:'Próximos viajes',
//     clase: 'home',
//     viajes:resultado[0],
//     testimoniales:resultado[1]
//     })).catch(error=> console.log(error));

// .then(viajes=>res.render('index',{