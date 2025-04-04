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
