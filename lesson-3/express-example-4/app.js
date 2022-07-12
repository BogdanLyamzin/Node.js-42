const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);