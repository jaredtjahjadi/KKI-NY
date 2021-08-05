import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

//Import pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';

//Import components
import NavBar from './components/NavBar';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';

export { Home, About, Activities, Newsletter, Contact }; //Export pages
export { NavBar, LanguageSwitcher, Footer }; //Export components

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