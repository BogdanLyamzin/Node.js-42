const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res)=> {
    // res.json(null);
    // res.send(null);
    res.json(books);
    // res.send(books);
})

app.listen(3000);