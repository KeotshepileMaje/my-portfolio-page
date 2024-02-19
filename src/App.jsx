import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';
import Contacts from './components/contacts/Contact';
import About from './components/about/About';
import Hero from './components/hero/Hero';

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
                xl:px-20
                md:px-10
                px-4
            ">
                <Hero/>
                <About />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

export default App;
