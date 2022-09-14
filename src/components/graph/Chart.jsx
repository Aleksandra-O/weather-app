import React from "react";
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
import cities from "../../mock/cities";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {

  const city=props.city;
  const dayjs = require('dayjs');
  const formatDate = city.hourly.time.map((item) => (dayjs(item).format('DD.MM HH:mm')));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly temperature chart',
      },
    },
  };

  const labels = formatDate;

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: city.hourly.temperature_2m,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

Chart.defaultProps = {
  city: cities[2]
};

export default Chart;