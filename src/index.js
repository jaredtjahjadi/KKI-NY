import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

//Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Activities from './pages/Activities';

//Import components
import Header from './components/Header';
import NavBar from './components/NavBar';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';

export { Home, About, Contact, Activities }; //Export pages
export { Header, NavBar, LanguageSwitcher, Footer }; //Export components

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();