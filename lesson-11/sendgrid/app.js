const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "bogdan@ukr.net",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новое письмо с сайта",
    html: "<p>Новое письмо с сайта</p>"
}

sgMail.send(email)
    .then(()=> console.log("Success send"))
    .catch(error => console.log(error.message));