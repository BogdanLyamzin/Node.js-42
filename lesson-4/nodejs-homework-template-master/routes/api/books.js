const express = require("express");
const Joi = require("joi");

const books = require("../../models/books");

const {createError} = require("../../helpers");

const router = express.Router();

const bookAddSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
})

router.get("/", async (req, res, next) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.get("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result) {
            throw createError(404);
        }
        res.json(result)
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req, res, next) => {
    try {
        const {error} = bookAddSchema.validate(req.body);
        if(error) {
            throw createError(400, error.message);
        }
        const result = await books.add(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next) => {
    try {
        const {error} = bookAddSchema.validate(req.body);
        if(error) {
            throw createError(400, error.message);
        }
        const {id} = req.params;
        const result = await books.updateById(id, req.body);
        if(!result) {
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.removeById(id);
        if(!result){
            throw createError(404)
        }
        // res.status(204).send()
        res.json({
            message: "Book deleted"
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;