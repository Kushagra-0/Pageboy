import Mail from "nodemailer/lib/mailer";
import transporter from "../config/smtp.config";


class MailService {
    public sendMail = async (mailOptons: Mail.Options) => {
        transporter.sendMail(mailOptons)
    }
}

const mailService = new MailService();

export {mailService};