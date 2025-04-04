const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro'); // Importa el modelo Libro

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener un libro por ISBN
router.get('/:isbn', async (req, res) => {
    try {
        const libro = await Libro.findOne({ Isbn: req.params.isbn });
        if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json(libro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Agregar un nuevo libro (MongoDB crea la base de datos automáticamente)
router.post('/', async (req, res) => {
    const libro = new Libro(req.body);
    try {
        const nuevoLibro = await libro.save(); // Guarda el libro en la BD
        res.status(201).json(nuevoLibro);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar un libro por ISBN
router.put('/:isbn', async (req, res) => {
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
});

// Eliminar un libro por ISBN
router.delete('/:isbn', async (req, res) => {
    try {
        const libroEliminado = await Libro.findOneAndDelete({ Isbn: req.params.isbn });
        if (!libroEliminado) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json({ message: 'Libro eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
