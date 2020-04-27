const Viaje=require('../models/Viajes');
const Testimonial=require('../models/Testimoniales');

exports.viajesControlador= async (req,res)=>{
    // res.render('viajes',{
    //     pagina:'Próximos viajes'
    // });
    const viajes= await Viaje.findAll()
    res.render('viajes',{
    pagina:'Próximos viajes',
    viajes
    })
}

exports.mostrarViaje=async (req,res)=>{
    const viaje= await Viaje.findByPk(req.params.id)
    res.render('viaje',{
        viaje
    })
}

// });
// const viajes= await Viaje.findAll()
// .then(viajes=>res.render('viajes',{
//     pagina:'Próximos viajes',
//     viajes
//     })).catch(error=> console.log(error));
// }

// exports.mostrarViaje=(req,res)=>{
// Viaje.findByPk(req.params.id).then(viaje=>res.render('viaje',{
//     viaje
// })).catch(error=>console.log(error));
// }