import React, { useState } from 'react';
import { Card } from 'antd';

const StockCard = ({ stock }) => {
    const [activeTabKey, setActiveTabKey] = useState('details');

    const onTabChange = (key) => {
        setActiveTabKey(key);
    };

    const tabList = [
        {
            key: 'details',
            tab: 'Details',
        },
        {
            key: 'prices',
            tab: 'Prices',
        },
    ];

    return (
        <Card
            style={{ 
                width: '100%', 
                marginTop: 16, 
                backgroundColor: stock.action === 'true' ? 'blue' : 'white', 
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
            }}
            title={stock.stockName}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={onTabChange}
        >
            {activeTabKey === 'details' ? (
                <div>
                    <p>Action: {stock.action}</p>
                    <p>Reason: {stock.reason}</p>
                </div>
            ) : (
                <div>
                    <p>Trade Price: {stock.tradePrice}</p>
                    <p>Stop Loss: {stock.stopLoss}</p>
                    <p>Target 1: {stock.target1}</p>
                    <p>Target 2: {stock.target2}</p>
                </div>
            )}
        </Card>
    );
};

export default StockCard;