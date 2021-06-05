import './App.scss';
import { Home, About, Contact, Activities } from './index';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LangSwitch from './components/LangSwitch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <LangSwitch />
      <Footer />
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="loading">
      <App />
    </Suspense>
  )
};