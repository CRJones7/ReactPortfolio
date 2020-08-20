import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import "./App.css"

// import { Document } from "react-pdf"
// import Container from './components/PortfolioContainer'

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />

        </div>

      </Wrapper>

      <Footer />
    </Router>


  );
}

export default App;

