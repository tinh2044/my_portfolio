// const express = require('express');
// const router = express.Router();
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/', router);
// app.listen(5000, () => console.log('Server Running'));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'tinhnguyen23122004@gmail.com',
//         pass: 'tinh23122004google',
//     },
// });

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Ready to Send');
//     }
// });

// router.post('/contact', (req, res) => {
//     const name = req.body.firstName + req.body.lastName;
//     const email = req.body.email;
//     const message = req.body.message;
//     const phone = req.body.phone;
//     const mail = {
//         from: name,
//         to: '********@gmail.com',
//         subject: 'Contact Form Submission - Portfolio',
//         html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//         if (error) {
//             res.json(error);
//         } else {
//             res.json({ code: 200, status: 'Message Sent' });
//         }
//     });
// });
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(PORT));

const nodemailer = require('nodemailer');
app.post('/#connect', async (req, res) => {
    const { email } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'tinhnguyen23122004@gmail.com', // generated ethereal user
            pass: 'tinh23122004google', // generated ethereal password
        },
    });
    await transporter.sendMail(
        {
            from: 'tinhprotv123@gmail.com', // sender address
            to: { email }, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>', // html body
        },
        (err) => {
            if (err) {
                return res.json({
                    message: 'Error',
                    err,
                });
            }
            return res.json({
                message: 'Success',
                err,
            });
        },
    );
});
