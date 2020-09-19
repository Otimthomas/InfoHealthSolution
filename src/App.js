import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Team from "./pages/Team";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/team'>
              <Team />
            </Route>
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        <ContactInfo />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
