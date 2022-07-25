const bcrypt = require("bcryptjs");

const {basedir} = global;

const {User, schemas} = require(`${basedir}/models/user`);

const {createError} = require(`${basedir}/helpers`);

const login = async (req, res) => {
    const {error} = schemas.login.validate(req.body);
    if(error){
        throw createError(400, error.message);
    }
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, "Email wrong");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword) {
        throw createError(401, "Password wrong");
    }
    const token = "hfsfg.asdsdgsfg.2224eh";
    res.json({
        token,
    })
}

module.exports = login;