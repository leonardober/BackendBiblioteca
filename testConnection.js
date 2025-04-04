require('dotenv').config();
const mongoose = require('mongoose');

// Conectar a MongoDB sin `+srv`
const MONGO_URI = "mongodb://leonardoalfonso:1Nom1QmnFafjScqU@cluster0.mongodb.net:27017/bibliotecaDB";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch(err => console.error("🔴 Error al conectar a MongoDB:", err));

const LibroSchema = new mongoose.Schema({
    Isbn: String,
    Titulo: String,
    Autor: String,
    numPaginas: Number
});

const Libro = mongoose.model("Libro", LibroSchema);

async function insertarLibro() {
    try {
        const libro = new Libro({
            Isbn: "978-1234567890",
            Titulo: "Mi Primer Libro en MongoDB",
            Autor: "Leonardo Alfonso",
            numPaginas: 200
        });

        const resultado = await libro.save();
        console.log("📖 Libro insertado:", resultado);
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error al insertar el libro:", error);
    }
}

insertarLibro();
