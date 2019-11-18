const dotenv = require('dotenv');
dotenv.config();

const appSettings = {
    //email
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS ? process.env.EMAIL_ADDRESS : false,
    EMAIL_PASS: process.env.EMAIL_PASS ? process.env.EMAIL_PASS : false,
};

module.exports = appSettings;