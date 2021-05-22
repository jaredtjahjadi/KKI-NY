import './App.scss';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;