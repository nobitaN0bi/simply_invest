import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockCard from '../components/StockCard'; 
import '../designs/StockRecommendationPage.css'; 

const StockRecommendationPage = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/recommendations'); 
                setStockData(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };

        fetchStockData();
    }, []);

    return (
        <div className="stock-card-grid">
            {stockData.map((stock, index) => (
                <StockCard key={index} stock={stock} />
            ))}
        </div>
    );
};

export default StockRecommendationPage;