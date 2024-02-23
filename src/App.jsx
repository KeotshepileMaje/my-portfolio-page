import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';
import Contacts from './components/contacts/Contact';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

function App() {
    return (
        <div
            className="
        flex
        flex-col
        min-h-screen
        ">
            <NavBar />
            <main
                className="
                flex-grow
            ">
                <div className="bg-gray-200">
                    <Hero />
                </div>

                <About />
                <Portfolio />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

export default App;
