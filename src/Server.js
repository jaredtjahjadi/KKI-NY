const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running"));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: false
})

transporter.verify((e) => e ? console.log(e) : console.log("Ready to send"));

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const inquiry = req.body.inquiry;
    const mail = {
        from: name,
        to: process.env.REACT_APP_EMAIL,
        subject: "[KKI-NY] New email",
        html: `<p>${name} <${email}> has sent a message:</p><p>${inquiry}</p>`
    };
    transporter.sendMail(mail, (err) => { err ? res.json({status: "ERROR"}) : res.json({status: "Sent!"}); })
})