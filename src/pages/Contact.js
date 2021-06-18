import { useTranslation } from 'react-i18next';
import nodemailer from 'nodemailer';

function sendMail() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });
    var message = {
        from: `${document.getElementById('email').value}`,
        to: process.env.EMAIL,
        subject: "Test",
        text: `${document.getElementById('inquiry').value}`
    }
    transporter.sendMail(message);
}

export default function Contact() {
    const { t } = useTranslation();
    document.title = `Contact Us | ${t('name')}`;

    return (
        <div className="content">
            <form>
                <label for="firstname">{t('contact.firstname')}</label>
                <input type="text" id="firstname" placeholder={t('contact.firstname')} /><br />
                <label for="lastname">{t('contact.lastname')}</label>
                <input type="text" id="lastname" placeholder={t('contact.lastname')} /><br />
                <label for="email">{t('contact.email')}</label>
                <input type="text" id="email" placeholder={t('contact.email')} /><br />
                <label for="inquiry">{t('contact.inquiry')}</label>
                <textarea type="text" id="inquiry" placeholder="How can we help you?" /><br />
                <input type="submit" value={t('contact.submit')} onClick={sendMail} />
            </form>
        </div>
    );
}