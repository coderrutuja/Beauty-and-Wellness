import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import './styles/main.css'; 

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Services />
                <ProductList />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
