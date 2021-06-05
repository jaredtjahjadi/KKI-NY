import './App.scss';
import { Home, About, Contact, Activities } from './index'; //Page imports
import { Header, NavBar, LanguageSwitcher, Footer } from './index'; //Component imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Allows the website to have multiple pages
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <LanguageSwitcher />
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