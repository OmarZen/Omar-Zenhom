import React from 'react';

import { About, Footer, Header, Competencies, Testimonial, Work, Experience} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Competencies />
    <Experience />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
