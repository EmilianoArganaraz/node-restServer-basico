const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CNN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log('DB online');
    } catch (error) {
        console.log(error);
        throw Error('Error al iniciar db');
    }
}


module.exports = {
    dbConnection
}