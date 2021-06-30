import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const send = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, inquiry } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            inquiry: inquiry.value
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });

        setStatus("Submitted!");
        let result = await response.json();
        alert(result.status);
    }

    const { t } = useTranslation();
    document.title = `${t('pages.contact')} | ${t('name')}`;

    return (
        <div className="content">
            <form onSubmit={send}>
                <label for="name">{t('contact.name')}</label>
                <input type="text" id="name" placeholder={t('contact.name')} required /><br />
                <label for="email">{t('contact.email')}</label>
                <input type="text" id="email" placeholder={t('contact.email')} required /><br />
                <label for="inquiry">{t('contact.inquiry')}</label>
                <textarea type="text" id="inquiry" placeholder="How can we help you?" required /><br />
                <button type="submit">{status}</button>
            </form>
        </div>
    );
}