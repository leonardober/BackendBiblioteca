const mongoose = require('mongoose');

const uri = 'mongodb+srv://usuario:contraseña@cluster0.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

module.exports = mongoose;
