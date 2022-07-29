const { Book, schemas } = require("../../models/book");

const { createError } = require("../../helpers");

const add = async (req, res) => {
    const { error } = schemas.add.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }
    const {id: owner} = req.user;
    const result = await Book.create({...req.body, owner});
    res.status(201).json(result);
}

module.exports = add;