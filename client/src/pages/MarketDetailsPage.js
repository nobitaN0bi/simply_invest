import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarketCard from '../components/MarketCard'; 
import '../designs/MarketDetailsPage.css'; 

const MarketDetailsPage = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/market-details'); 
                setMarketData(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <div className="market-card-grid">
            {marketData.map((market, index) => (
                <MarketCard key={index} market={market} />
            ))}
        </div>
    );
};

export default MarketDetailsPage;