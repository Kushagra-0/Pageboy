import {createTransport} from 'nodemailer'

const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: "kushagrashukla0190@gmail.com",
        pass: "ajvbjkavbkava"
    },
    secure: true,
});

export default transporter;