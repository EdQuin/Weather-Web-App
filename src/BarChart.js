import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from "react-chartjs-2"
import { Chart, Chartext } from "./styles";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = (props) => {
    const weather = [];
    const hoursFormat = [];
    let dataobj = props.data;

    function showHours() {
        const hours = dataobj.slice(0, 23);
        hours.map((hour) => {
            weather.push(hour.temp)
        })
        hours.map((hour) => {
            let val = new Date(hour.dt * 1000);
            let obj_format = val.getHours();
            hoursFormat.push(obj_format);
        })
    }
    const data = {
        labels: hoursFormat,
        datasets: [{
            label: '# of Votes',
            data: weather,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fountSize: 26
            }
        }
    }

    return (
        <div>
            <Chartext>Maximum temperature</Chartext>
            <Chart>
                <Bar
                    data={data}
                    options={options}
                    height={400}
                />
            </Chart>
            {showHours()}
            <Chartext>Times of Day</Chartext>
        </div>
    )
}
export default BarChart