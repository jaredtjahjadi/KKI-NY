const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASS
    }
});

transporter.verify((err, success) => {console.log(err ? err : "Server ready");});

const app = express();

app.post("/send", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var mail = {
        from: `${name} <${email}>`,
        to: 'jaredtjahjadi@gmail.com',
        subject: `${name} has sent you a message.`,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        res.json(err ? { status: 'fail' } : {status: 'success' });
    })
})