// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB');
    } catch (err) {
        console.error('❌ Error al conectar a MongoDB:', err);
        process.exit(1); // Detiene la ejecución en caso de error
    }
};

module.exports = connectDB;
  

/* Beneficios de esta estructura:
Separas la lógica de conexión a la base de datos.

El archivo index.js queda limpio y claro.

Estás aplicando validaciones importantes como el .env.

Es escalable para proyectos más grandes.


FUNCIONALIDADES YA IMPLEMENTADAS:
🔄 Obtener y mostrar todos los libros

Se ejecuta automáticamente al cargar la página (DOMContentLoaded).

También podés hacer clic en el botón “🔄 Mostrar todos”.

📥 Agregar un nuevo libro

Al completar el formulario y hacer clic en “Guardar Libro”, se hace un POST al backend.

Se limpian los campos y se recarga la lista.

✏️ Editar un libro

Al hacer clic en “✏️ Editar”, se cargan los datos del libro en el formulario.

Se cambia el texto a “✏️ Editando libro”.

Al guardar, se hace un PUT para actualizar el libro en el backend.

🗑️ Eliminar un libro

Botón “❌ Eliminar” que confirma con el usuario y hace un DELETE.

🔍 Buscar libros por autor

El input y botón permiten buscar libros por nombre de autor usando GET /libros/autor/:nombre.

Validación mínima y feedback al usuario

Alertas de éxito y error.

Validaciones básicas (como campos requeridos en el formulario).


Sí hay comunicación completa entre el frontend y el backend:
🔁 Frontend → Backend
Agregar libro (POST)

Editar libro (PUT)

Eliminar libro (DELETE)

Buscar por autor (GET /libros/autor/:nombre)

Obtener todos los libros (GET /libros)

Obtener libro por ISBN para editar (GET /libros/:isbn)

➡️ Todo eso lo estás haciendo desde el main.js y se está comunicando correctamente con tu servidor Node.js / Express.

🔁 Backend → Frontend
Te responde con:

Los libros guardados.

El libro solicitado por ISBN.

Los libros filtrados por autor.

Mensajes de éxito/error al eliminar o actualizar.

➡️ Y todo eso lo estás mostrando en tu index.html, ya sea como una lista o dentro del formulario para editar.

🔒 En resumen:
✅ Tu aplicación ya tiene una API funcional
✅ El frontend envía datos al backend
✅ El backend responde y los datos llegan al frontend

*/