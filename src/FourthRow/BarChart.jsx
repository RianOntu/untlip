import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
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
                    return `${context.dataset.label}: ${context.raw}`;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const BarChart = () => {
    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <h2>Bar Chart Example</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
