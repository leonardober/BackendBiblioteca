require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const librosRoutes = require('./routes/librosRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // 👈 Necesario para permitir peticiones del frontend
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
app.use('/libros', librosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});





/*

Asegúrate de que tu index.js del backend use la conexión desde config/db.js
En tu archivo index.js, asegúrate de que la conexión a MongoDB esté bien configurada.



¡Excelente! Tu index.js está perfectamente estructurado y ya tiene todo :

Cargar variables de entorno

Conectar a MongoDB

Habilitar CORS y express.json()

Servir el frontend desde /public

Exponer las rutas para libros

✅ Conclusión: ¡Tu servidor está listo para funcionar correctamente con el
 frontend que te pasé arriba! Si colocas los archivos index.html y main.js 
 dentro de una carpeta llamada public, tu servidor los servirá automáticamente.
 📁 tu-proyecto/
│
├── 📁 config/
│   └── db.js
│
├── 📁 controllers/
│   └── librosController.js
│
├── 📁 models/
│   └── Libro.js
│
├── 📁 routes/
│   └── librosRoutes.js
│
├── 📁 public/
│   ├── index.html
│   └── main.js
│
├── .env
├── package.json
├── index.js
 */