import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Error from './components/Error';
import './styles/index.css';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Accomodation from './pages/Accomodation';

function App() {
    return(
        <div>
            <div className="App">
                <Router>
                    <Header/>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="products/:productId" element={<Accomodation />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </div>
    );
}

export default App;