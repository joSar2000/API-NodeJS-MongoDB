const mongoose = require('mongoose');
const URI = 'mongodb://ujsbmgv0u3ijb3aso7bd:yzr25XvSkqoAvyK6piLH@bdb9mn59uriqocg-mongodb.services.clever-cloud.com:27017/bdb9mn59uriqocg';
const dbConn = async() => {
    try{
        console.log("Tratando de conectar con MongoDB!");
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado con exito");
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    dbConn
}