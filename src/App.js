import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import signinPage from './pages/signin'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'
import signUp from './pages/signUp';

function App({isOpen, toggle}) {
  return (
    <Router>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact= {true} />
        <Route path="/signin" component={signinPage} exact= {true} />
        <Route path="/signup" component={signUp} exact = {true} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
