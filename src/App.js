import React from 'react';
import{ About, Footer, Header, Skills, Testimonials, Work} from './container';
import{Navbar} from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Testimonials />
        <Footer />
        <Work />
    </div>
  );
}

export default App;