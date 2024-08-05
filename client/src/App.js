import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import StockRecommendationPage from './pages/StockRecommendationPage';
import MarketDetailsPage from './pages/MarketDetailsPage';
import Navbar from './components/nav-bar/navbar';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <Router>
            <div className='nav-cont'>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recommendations" element={<StockRecommendationPage />} />
                    <Route path="/market-details" element={<MarketDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
