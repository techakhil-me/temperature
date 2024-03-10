// components/StudyHoursChart.js
'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

const StudyHoursChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
       );
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Hours Studied',
        data: [4, 5, 6, 7, 8, 6, 7], // Example data
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-opacity-50 bg-white shadow-md rounded-lg p-4">
      <Line
 data={data}
 width={400} // Set the width
 height={200} // Set the height
 options={{ maintainAspectRatio: false }}
/>
    </div>
  );
};

export default StudyHoursChart;
