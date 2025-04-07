const Libro = require('../models/Libro');

// Obtener todos los libros
exports.getLibros = async (req, res) => {
    try {
        const libros = await Libro.find(); // llamar desde la base de datos
        res.json(libros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un libro por ISBN
exports.getLibroPorISBN = async (req, res) => {
    try {
        const libro = await Libro.findOne({ Isbn: req.params.isbn });
        if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json(libro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 🔹 Obtener libros por nombre del autor
exports.getLibrosPorAutor = async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const libros = await Libro.find({
            'Autor.Nombre': { $regex: nombre, $options: 'i' }
        });
        res.json(libros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Agregar un nuevo libro
exports.agregarLibro = async (req, res) => {
    console.log('📥 Datos recibidos para agregar libro:', req.body);

    const libro = new Libro(req.body);
    try {
        const nuevoLibro = await libro.save();
        console.log('📘 Libro agregado con éxito:', nuevoLibro.Titulo); // 👈 Nuevo log agregado
        res.status(201).json(nuevoLibro);
    } catch (err) {
        console.error('❌ Error al guardar libro:', err);
        res.status(400).json({ message: err.message });
    }
};

// Actualizar un libro por ISBN
exports.actualizarLibro = async (req, res) => {
    try {
        const libroActualizado = await Libro.findOneAndUpdate(
            { Isbn: req.params.isbn },
            req.body,
            { new: true }
        );

        if (!libroActualizado) return res.status(404).json({ message: 'Libro no encontrado' });

        console.log('✏️ Libro actualizado:', libroActualizado.Titulo); // 👈 Nuevo log agregado
        res.json(libroActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un libro por ISBN
exports.eliminarLibro = async (req, res) => {
    try {
        const libroEliminado = await Libro.findOneAndDelete({ Isbn: req.params.isbn });

        if (!libroEliminado) return res.status(404).json({ message: 'Libro no encontrado' });

        console.log('🗑️ Libro eliminado:', libroEliminado.Titulo); // 👈 Nuevo log agregado
        res.json({ message: 'Libro eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



/*Tu archivo librosController.js está perfectamente implementado, incluyendo:
Ahora, cada vez que:

agregues un libro → se mostrará 📘 Libro agregado con éxito: ...

actualices un libro → se mostrará ✏️ Libro actualizado: ...

elimines un libro → se mostrará 🗑️ Libro eliminado: ...

Así puedes monitorear todo desde la consola de tu servidor.

✅ Obtener todos los libros

✅ Buscar por ISBN

✅ Buscar por autor

✅ Agregar

✅ Actualizar

✅ Eliminar

Todo está bien estructurado y conectado correctamente con tu modelo Mongoose (Libro).
 */