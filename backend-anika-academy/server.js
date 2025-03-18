const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mailtrap configuration
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
    }
});

app.post("/send-email", async (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "your_receiver_email@example.com", // Change this to the email you want to receive messages at
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        console.log("calling nodemailer");
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.log("Error sending email: ", error);
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
