import PropTypes, { nominalTypeHack } from 'prop-types';
import styles from './Chart.module.css';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
const Chart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

  );
  const options = {
    responsive: true,
    legend: {
      display: false,
    
    },
    tension: 0.4,

  };
  
  const labels = [0, 1, 2, 3, 4, 5, 6, 7];
  const data = {
    labels,
    datasets: [
      {
        label: ' ',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgba(250, 107, 107, 0.6)',
        backgroundColor: 'rgba(255, 107, 107, 0.5)',
        data: [0, 10, 5, 2, 20, 30],
      },

    ],
  }; 
 
  return (
    <> 
      <Line options={options} data={data}/>;
    
    </>
   )
}

Chart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
}

export default Chart;