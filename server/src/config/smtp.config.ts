import {createTransport} from 'nodemailer'

const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: "kushagrashukla0190@gmail.com",
        pass: "rjiq xztz zudf rixb"
    },
    secure: true,
});

export default transporter;