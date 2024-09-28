const mongoose = require('mongoose');
require('dotenv').config();



const conectarDB = async() => {

    try{
        console.log(process.env.DB_MONGO)
        await mongoose.connect(process.env.DB_MONGO);
        console.log('BD CONECTADA')
    }catch(error){
        console.log(error);
        process.exit(1); // Detenemos la app
    }
};

module.exports = conectarDB;