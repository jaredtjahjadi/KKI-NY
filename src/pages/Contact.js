import React from 'react';
import { withTranslation } from 'react-i18next';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onNameChange(event) { this.setState({name: event.target.value }) }
    onEmailChange(event) { this.setState({ email: event.target.value }) }
    onMessageChange(event) { this.setState({ message: event.target.value }) }

    submitEmail(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if(response.data.status === "success") {
                alert("Message sent.");
                this.resetForm();
            }
            else if(response.data.status === "fail") {
                alert("Message failed to send.");
            }
        })
    }

    resetForm() { this.setState({ name: '', email: '', message: '' }); }

    render() {
        const { t } = this.props;
        return (
            <div className="content">
                <form onSubmit={this.submitEmail.bind(this)}>
                    <label htmlFor="name">{t('contact.name')}</label>
                    <input type="text" id="name" placeholder={t('contact.name')} required value={this.state.name} onChange={this.onNameChange.bind(this)} /><br />
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input type="text" id="email" placeholder={t('contact.email')} required value={this.state.email} onChange={this.onEmailChange.bind(this)} /><br />
                    <label htmlFor="inquiry">{t('contact.inquiry')}</label>
                    <textarea type="text" id="inquiry" placeholder={t('contact.help')} required value={this.state.message} onChange={this.onMessageChange.bind(this)} /><br />
                    <button type="submit">{t('contact.submit')}</button>
                </form>
            </div>
        );
    }
}

export default withTranslation()(Contact);