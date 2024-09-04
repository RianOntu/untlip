import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

const MarketShare = () => {
    const data = {
        labels: ['Company A', 'Company B', 'Company C', 'Company D'],
        datasets: [
            {
                label: 'Market Share',
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#FF9999',
                    '#66B2FF',
                    '#FFCC66',
                    '#99CC99',
                ],
                hoverBackgroundColor: [
                    '#FF9999',
                    '#66B2FF',
                    '#FFCC66',
                    '#99CC99',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                enabled: true,
            },
        },
    };
    useEffect(() => {
        // Cleanup function to destroy chart instance if necessary
        return () => {
            // Clean up code if you manually manage charts
            ChartJS.getChart('marketShareChart')?.destroy();
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <h2>Market Share</h2>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default MarketShare;
