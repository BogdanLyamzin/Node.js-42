const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "62dedb285bf4b9dd6f361745"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    // const result = jwt.verify(token, SECRET_KEY);
    // console.log(result);
    const result = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGVkYjI4NWJmNGI5ZGQ2ZjM2MTc0NSIsImlhdCI6MTY1OTAyNzE2MSwiZXhwIjoxNjU5MDMwNzYxfQ.-7bWluoQpTHikSWUx4DjGwNtyoflSvC8TIEccJI16Yy", SECRET_KEY);
    console.log(result);
} catch (error) {
    console.log(error.message);
}


