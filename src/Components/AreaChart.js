import React from 'react';
import { Line } from 'react-chartjs-2';
 
const AreaChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 15, 8, 12, 17],
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
 
  return (
    <div>
      <h2>Area Chart</h2>
      <Line data={data} />
    </div>
  );
};
 
export default AreaChart;