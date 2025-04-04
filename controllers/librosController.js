const Libro = require('../models/Libro');

// Obtener todos los libros
exports.getLibros = async (req, res) => {
    try {
        const libros = await Libro.find("67ee9c93842075869fd87c00");//llamar desde la base de datos
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

// Agregar un nuevo libro
exports.agregarLibro = async (req, res) => {
    const libro = new Libro(req.body);
    try {
        const nuevoLibro = await libro.save();
        res.status(201).json(nuevoLibro);
    } catch (err) {
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
        res.json({ message: 'Libro eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
