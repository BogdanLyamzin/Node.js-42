const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465 2255,
    secure: true, 
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD
    }
}

const email = {
    to: "bogdan@ukr.net",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Новое письмо с сайта",
    html: "<p>Новое письмо с сайта</p>"
}

const transporter = nodemailer.createTransport(nodemailerConfig);

transporter.sendMail(email);