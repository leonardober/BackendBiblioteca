const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    Isbn: String,
    Titulo: String,
    fechEdicion: String,
    numPaginas: Number,
    cantEjemplares: Number,
    cantEjemplaresDisponibles: Number,
    Sinopsis: String,
    tipoPresentacion: String,
    tipoLiteratura: String,
    Autor: {
        Nombre: String,
        Apellidos: String,
        fechPub: String,
        Premios: [String],
        fecFall: String
    }
});

module.exports = mongoose.model('Libro', libroSchema);


/*MI-PROYECTO-BACKEND/
│
├── config/
│   └── db.js                   # Conexión a MongoDB
│
├── controllers/
│   └── librosController.js     # Lógica de negocio para libros
│
├── models/
│   └── Libro.js                # Esquema Mongoose para libros
│
├── routes/
│   └── librosRoutes.js         # Rutas relacionadas a libros
│
├── public/
│   └── index.html              # Frontend (si lo sirves desde el backend)
│   └── main.js                 # JavaScript del frontend
│   └── estilos.css             # Estilos del frontend (opcional)
│
├── .env                        # Variables de entorno (ej. MONGO_URI)
├── .gitignore                 # Ignorar node_modules, .env, etc.
├── index.js                   # Punto de entrada principal del servidor
├── package.json               # Dependencias y scripts
└── README.md                  # Documentación del proyecto (opcional)

routes/librosRoutes.js
Bien estructurado y limpio. Has cubierto todas las rutas necesarias:

Método	Ruta	Acción
GET	/libros/	Obtener todos los libros
GET	/libros/autor/:nombre	Buscar por nombre del autor
GET	/libros/:isbn	Obtener un libro específico
POST	/libros/	Agregar un nuevo libro
PUT	/libros/:isbn	Actualizar un libro
DELETE	/libros/:isbn	Eliminar un libro
✔️ Incluiste una ruta de prueba para MongoDB Atlas → muy útil para testear la conexión.


controllers/librosController.js
Muy claro y funcional. Buen uso de async/await, manejo de errores y mensajes descriptivos.


Estado actual del proyecto
Conexión a MongoDB Atlas: funcionando correctamente (✅ Conectado a MongoDB).

Servidor Express: corriendo en http://localhost:3000.

Base de datos MongoDB (bibliotecaDB) activa y con la colección libros.

Script de inicio: funcionando (npm start).

Variables de entorno en .env (MONGO_URI, PORT).

Dependencias esenciales bien instaladas (express, mongoose, cors, dotenv).

Modo desarrollo: habilitado con nodemon (npm run dev).


¿Qué podrías hacer ahora?
Aquí algunas ideas según hacia dónde quieras ir:

📦 1. Probar con herramientas como Postman o desde tu frontend
Ya puedes hacer peticiones como:

GET http://localhost:3000/libros

GET http://localhost:3000/libros/autor/Gabriel

POST http://localhost:3000/libros (con body JSON)

🌐 2. Conectar el frontend
Tu frontend puede hacer fetch directamente a http://localhost:3000/libros.

🚀 3. Desplegar en internet
Puedes subir tu backend a Render, Railway, Vercel (solo para frontend normalmente).

MongoDB Atlas ya está online, así que el backend puede ir a cualquier lado.

📘 4. Documentar la API
Puedes usar Swagger o simplemente agregar un README con todos los endpoints y ejemplos.


📦 5. Agregar autenticación



Asegúrate de tener ambos servidores funcionando
Backend: ya lo tienes en marcha con npm start y muestra: ✅ Conectado a MongoDB.
Frontend: abre el archivo index.html desde la carpeta public/ en tu navegador.
Si usas Live Server, asegúrate de que está sirviendo el frontend desde algo como http://127.0.0.1:5500/public/index.html
// Deberías ver la interfaz de usuario que has creado para interactuar con tu API de libros.



👌 Buenas prácticas aplicadas:
Uso de try/catch.

Validación de si el libro existe antes de actualizar/eliminar.

findOneAndUpdate y findOneAndDelete: correctos para trabajar con campos únicos como Isbn.


MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/bibliotecaDB?retryWrites=true&w=majority
PORT=3000
# Puerto donde corre el servidor
PORT=3000

# URI de conexión a MongoDB Atlas (recuerda reemplazar los valores reales)
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/bibliotecaDB?retryWrites=true&w=majority
¿Dónde y cómo se usa .env?
Primero, necesitas instalar dotenv si no lo hiciste aún:
npm install dotenv
Luego, en tu archivo index.js, lo debes importar así al principio:
require('dotenv').config();
Y ya puedes usar tus variables con process.env.NOMBRE_VARIABLE, por ejemplo:
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI);

Contenido ideal de .gitignore
node_modules/
.env


.env
Guarda este archivo en la raíz del proyecto. Reemplaza los valores por los tuyos reales.

# Puerto donde corre tu servidor Express
PORT=3000

# URI de conexión a MongoDB Atlas (reemplaza usuario, contraseña, y nombre de tu base de datos)
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/bibliotecaDB?retryWrites=true&w=majority


.gitignore

# Módulos de Node.js
node_modules/

# Variables de entorno (datos sensibles)
.env

# Archivos temporales o del editor
*.log
.DS_Store
.vscode/



Vamos a repasar el flujo completo para que tu servidor backend arranque bien,
 lea correctamente el archivo .env, se conecte a MongoDB 
y exponga las rutas de tu API. Todo funcionando

Estructura de carpetas y archivos
MI-PROYECTO-BACKEND/
├── controllers/
│   └── librosController.js
├── models/
│   └── Libro.js
├── routes/
│   └── librosRoutes.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

.env
index.js (archivo principal del servidor)
Instalar las dependencias necesarias
npm install express mongoose cors dotenv
Arrancar el servidor
npm start
// o node index.js
 deberías ver algo como:
 ✅ Conectado a MongoDB
🚀 Servidor corriendo en http://localhost:3000

Paso 1: Abrir la Consola de MongoDB (mongosh)
Si estás en MongoDB Compass, puedes abrir la terminal interna:

Conéctate a localhost:27017.

Haz clic en "Terminal" en la parte superior.
Si estás en Git Bash, CMD o Terminal, ejecuta:

mongosh

Esto abrirá la consola de MongoDB y te conectará al servidor local.

Paso 2: Conectarse a la Base de Datos bibliotecaDB
En la consola de mongosh, escribe:
use bibliotecaDB
// Esto cambiará el contexto a la base de datos bibliotecaDB.
// Si no existe, se creará automáticamente al insertar datos.

Si la base de datos existe, verás el mensaje:

switched to db bibliotecaDB
// Ahora estás en la base de datos bibliotecaDB.
// Puedes verificarlo escribiendo db en la consola:

 Paso 3: Verificar las Colecciones
Para ver las colecciones dentro de bibliotecaDB, usa:

show collections
// Esto mostrará todas las colecciones dentro de la base de datos bibliotecaDB.
// Si ves "libros", significa que tu colección se creó correctamente al insertar datos desde tu API.
// Si no ves "libros", significa que no se han insertado datos aún.
// Puedes insertar un libro usando la API o directamente desde la consola de MongoDB.
// Para insertar un libro directamente desde la consola de MongoDB, usa:
db.libros.insertOne({
    Isbn: "978-3-16-148410-0",
    Titulo: "El Gran Libro",
    fechEdicion: "2023-01-01",
    numPaginas: 300,
    cantEjemplares: 5,
    cantEjemplaresDisponibles: 5,
    Sinopsis: "Una historia fascinante.",
    tipoPresentacion: "Tapa dura",
    tipoLiteratura: "Ficción",
    Autor: {
        Nombre: "Juan",
        Apellidos: "Pérez",
        fechPub: "2023-01-01",
        Premios: ["Premio Nobel"],
        fecFall: null
    }
});
// Esto insertará un libro en la colección "libros".
// Puedes verificar que se haya insertado correctamente usando:
db.libros.find().pretty()
// Esto mostrará todos los libros en la colección "libros" en un formato legible.
// Si ves el libro que insertaste, ¡todo está funcionando correctamente!
// Si no ves el libro, verifica que tu API esté corriendo y que hayas hecho la solicitud correctamente.
// Si ves el libro, ¡felicitaciones!
// Tu API está funcionando y tu base de datos está lista para usarse.
// Ahora puedes usar tu API para interactuar con la base de datos.
// Puedes hacer peticiones GET, POST, PUT y DELETE a la API para gestionar los libros.
// Recuerda que puedes usar herramientas como Postman o Insomnia para hacer estas peticiones de manera más fácil.
// También puedes usar el frontend que hayas creado para interactuar con la API.
// Si tienes algún problema, revisa los logs en la consola donde está corriendo tu servidor Express.
// Ahí podrás ver si hay errores o si las peticiones están llegando correctamente.
// Si ves algún error, intenta solucionarlo o pregunta aquí para obtener ayuda.
// ¡Buena suerte con tu proyecto!

Paso 4: Consultar los Datos en bibliotecaDB
Para ver los documentos almacenados en la colección libros, usa:

db.libros.find().pretty()
// Esto mostrará todos los libros en la colección "libros" en un formato legible.
// Si ves el libro que insertaste, ¡todo está funcionando correctamente!
Esto mostrará los datos en formato JSON de manera ordenada.

FLUJO COMPLETO ARRANQUE SERVIDOR
1Estructura de carpetas y archivos
2.ENV
3.Index.js (archivo principal del servidor)
4. ✅ Instalar las dependencias (si aún no lo has hecho)
Desde la terminal en tu proyecto:
npm install express mongoose cors dotenv
5. ✅ Arrancar el servidor
npm start
// o node index.js
// deberías ver algo como:
✅ Conectado a MongoDB
🚀 Servidor corriendo en http://localhost:3000
// Si ves esto, significa que tu servidor está funcionando correctamente y conectado a MongoDB.
// Puedes abrir tu navegador y visitar http://localhost:3000/libros para ver si la API responde correctamente.
// Si no ves esto, verifica que tu conexión a MongoDB esté funcionando y que no haya errores en la consola.

6. (Opcional) 👉 Verifica con Postman o navegador
Ver todos los libros: GET http://localhost:3000/libros

Agregar uno nuevo (por Postman): POST http://localhost:3000/libros

*/