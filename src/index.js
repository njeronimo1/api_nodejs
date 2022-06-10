const express = require('express');

// FAKE DATABASE
let books = []

// CRIAR O APP
const app = express();

app.use(express.json());

app.post('/books', (require, response) => {
    const { id, nome, endereco, idade } = require.body;
    const book = {id, nome, endereco, idade}
    books.push(book);
    return response.status(201).json(book);
});

app.get('/books', (req,res) => {
    return res.status(200).json(books);
});

app.get("/books/:book_id", (req, res) => {
    const { book_id } = req.params;
    const book = books.find((book) => book.id === book_id);
    return res.status(200).json(book);
});

//APLICAR MIDDLEWARES

//MANDAR O SERVIDOR RODAR
app.listen(3333, ()=>console.log('listening'));