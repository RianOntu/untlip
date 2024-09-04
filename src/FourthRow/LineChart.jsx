import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Monthly Revenue',
            data: [400, 450, 300, 500, 600, 700, 650],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.dataset.label}: $${context.raw}`;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                    return `$${value}`;
                },
            },
        },
    },
};

const LineChart = () => {
    return (
        <div style={{ width: '600px', height: '400px' }}>
            <h2>Line Chart Example</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
