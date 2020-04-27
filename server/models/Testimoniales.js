const Sequelize=require('sequelize');
const connection=require('../config/database');

const Testimonial=connection.define('testimoniales',{
    nombre:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    }
});

module.exports=Testimonial;