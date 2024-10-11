const mongoose = require('mongoose');

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'peliculas'
        })
        console.log('se conecto correctamente!');
    }catch(e) {
        console.log('error', e)
        throw new Error('Error de conexión')
    }
}

module.exports = { mongoConn }