import './App.scss';
import { Home, About, Activities, Newsletter, Contact } from './index'; //Page imports
import { LanguageSwitcher, Footer } from './index'; //Component imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Allows the website to have multiple pages
import NavBar from './components/NavBar';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <NavBar /> {/* Always displayed on top */}
      {/* Page content */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/newsletter" component={Newsletter} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <LanguageSwitcher />
      <Footer /> {/* Always displayed on bottom */}
    </Router>
  );
}

//Wait for website elements (i.e. English/Indonesian translations) to fully load
export default function WrappedApp() { return (<Suspense fallback="loading"><App /></Suspense>); };