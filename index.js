require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Verificar que las variables de entorno se están cargando
console.log('🔍 URI de MongoDB:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
    console.error('❌ ERROR: La variable MONGO_URI no está definida en .env');
    process.exit(1); // Detiene la ejecución si falta la URI
}

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const librosRoutes = require('./routes/librosRoutes');
app.use('/libros', librosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
