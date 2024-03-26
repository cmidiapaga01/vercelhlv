import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import TourDetailsPage from './pages/TourDetailsPage'; // Importando a nova página de detalhes
import SimpleCookiePreference from './components/SimpleCookiePreference';
import './assets/styles/main.css';
import TagManager from 'react-gtm-module';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tourspage" element={<ToursPage />} />
          {/* Rota para a página de detalhes do tour */}
          <Route path="/tour/:id" element={<TourDetailsPage />} />
        </Routes>
        <SimpleCookiePreference />
      </Router>
    </ChakraProvider>
  );
}

export default App;