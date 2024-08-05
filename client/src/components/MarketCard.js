import React from 'react';
import { Card } from 'antd';

const MarketCard = ({ market }) => {
    return (
        <Card
            style={{ 
                width: '100%', 
                marginTop: 16, 
                backgroundColor: 'white', 
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
            }}
            title={market.marketName}
        >
            <div>
                <p>Details: {market.details}</p>
            </div>
        </Card>
    );
};

export default MarketCard;