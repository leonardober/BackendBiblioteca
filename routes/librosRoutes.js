const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// ✅ Ruta de prueba para verificar conexión a MongoDB Atlas
router.get('/prueba-conexion', async (req, res) => {
    try {
        res.status(200).json({ message: '✅ Conexión establecida correctamente con MongoDB Atlas' });
    } catch (err) {
        res.status(500).json({ message: '❌ Fallo de conexión con MongoDB' });
    }
});

 //✅ Obtener todos los libros
router.get('/', librosController.getLibros);

// ✅ Buscar libros por nombre del autor
router.get('/autor/:nombre', librosController.getLibrosPorAutor);

// ✅ Obtener un libro por ISBN
router.get('/:isbn', librosController.getLibroPorISBN);

// ✅ Agregar un nuevo libro
router.post('/', librosController.agregarLibro);

// ✅ Actualizar un libro por ISBN
router.put('/:isbn', librosController.actualizarLibro);

// ✅ Eliminar un libro por ISBN
router.delete('/:isbn', librosController.eliminarLibro);

module.exports = router;

// Agregamos una ruta GET /libros/prueba-conexion al principio para que puedas
//  ir a http://localhost:3000/libros/prueba-conexion
//  y saber si la conexión a MongoDB está funcionando.
//Paso 4: Prueba en el navegador o Postman
//  http://localhost:3000/libros/prueba-conexion
//  Si ves el mensaje de conexión exitosa, ¡todo está bien!
//Paso 5: Agregar las rutas restantes

//Aseguramos que todas las rutas estén conectadas a tu controlador librosController.
//  Las rutas son las siguientes:
//  - GET /libros: Obtener todos los libros
//  - GET /libros/autor/:nombre: Buscar libros por nombre del autor
//  - GET /libros/:isbn: Obtener un libro por ISBN
//  - POST /libros: Agregar un nuevo libro
//  - PUT /libros/:isbn: Actualizar un libro por ISBN
//  - DELETE /libros/:isbn: Eliminar un libro por ISBN
//Paso 6: Probar las rutas
//  Puedes usar Postman o tu navegador para probar las rutas GET.
//  Para las rutas POST, PUT y DELETE, necesitarás usar Postman o una herramienta
//  similar para enviar datos en el cuerpo de la solicitud.
//  Asegúrate de que el servidor esté corriendo y prueba cada una de las rutas.
//  Si todo está bien, deberías ver las respuestas esperadas en cada caso.
//Paso 7: Manejo de errores
//  Asegúrate de manejar errores en cada una de las funciones del controlador
/*  Tu archivo librosRoutes.js está completo y correcto para manejar todas las operaciones necesarias desde el frontend:

✅ Obtener todos los libros
✅ Buscar libros por autor
✅ Obtener un libro por ISBN
✅ Agregar un nuevo libro
✅ Actualizar un libro por ISBN
✅ Eliminar un libro por ISBN
✅ Ruta de prueba de conexión

*/