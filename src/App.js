import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Alterado para Routes
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import './assets/styles/main.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes> {/* Alterado para Routes */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
