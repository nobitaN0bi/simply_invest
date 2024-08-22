import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import ModernChart from './ModernChart';
import StackedRecommendationCards from './StackedRecommendationCards';

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketResponse = await axios.get('http://localhost:5000/api/stocks/market-details');
        const recommendationsResponse = await axios.get('http://localhost:5000/api/stocks/recommendations');
        
        const transformedMarketData = marketResponse.data.map(item => ({
          name: item.indicesName,
          value: item.Price
        }));
        
        setMarketData(transformedMarketData);
        setRecommendations(recommendationsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 w-full px-6 shadow-md">
        <h1 className="text-2xl font-bold">Stock Market Dashboard</h1>
      </header>
      
      <main className="flex-grow flex overflow-hidden">
        <motion.div 
          className="w-2/3 p-6 overflow-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 h-full">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
            <div className="h-[calc(100%-2rem)]">
              <ModernChart data={marketData} />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="w-1/3 p-6 overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Top Recommendations</h2>
            <div className="flex-grow overflow-y-auto">
              <StackedRecommendationCards recommendations={recommendations} />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;