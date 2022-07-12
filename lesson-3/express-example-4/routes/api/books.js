const express = require("express");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(books)
});

router.get("/:id", (req, res)=> {

})

router.post("/", (req, res)=> {

})

module.exports = router;
