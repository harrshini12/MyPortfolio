const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/public'))

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  app.post("/send", (req, res) => {
    
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });

      const mail = {
        from: data.name,
        to: process.env.EMAIL,
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
  
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({status:'Something went wrong'});
        } else {
          res.status(200).json({status: 'success'});
        }
      });
    });
  });

app.listen(process.env.PORT || 5000, 
() => console.log("Server is running..."));