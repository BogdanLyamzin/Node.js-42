const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const {basedir} = global;

const {User, schemas} = require(`${basedir}/models/user`);

const {createError, sendEmail} = require(`${basedir}/helpers`);

const register = async(req, res)=> {
    const {error} = schemas.register.validate(req.body);
    if(error){
        throw createError(400, error.message);
    }
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw createError(409, `${email} is already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const result = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`
    }
    await sendEmail(mail);
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = register;