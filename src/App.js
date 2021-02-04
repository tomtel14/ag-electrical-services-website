import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services'
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/projects' component={Projects} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
