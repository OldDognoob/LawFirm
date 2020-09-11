import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './LawPages/HomePage/Home';
import People from './LawPages/People/People';
import Services from './LawPages/Service/Service';
import AboutUs from './LawPages/AboutUs/AboutUs';
import ContactUs from './LawPages/ContactUs/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/people' component={People} />
        <Route path='/services' component={Services} />
        <Route path='/about us' component={AboutUs} />
        <Route path='/contact-us' component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;