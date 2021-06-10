import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
    document.title = `Contact Us | ${t('name')}`;
    return (
        <div className="content">
            <form action="contact.php">
                <label for="firstname">{t('contact.firstname')}</label>
                <input type="text" placeholder={t('contact.firstname')} /><br />
                <label for="lastname">{t('contact.lastname')}</label>
                <input type="text" placeholder={t('contact.lastname')} /><br />
                <label for="email">{t('contact.email')}</label>
                <input type="text" placeholder={t('contact.email')} /><br />
                <label for="inquiry">{t('contact.inquiry')}</label>
                <textarea type="text" placeholder="How can we help you?" /><br />
                <input type="submit" value={t('contact.submit')} />
            </form>
        </div>
    );
}

export default Contact;