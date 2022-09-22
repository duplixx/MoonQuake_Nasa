import React from "react"
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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function Graph(props) {
    const [quake, setQuake] = React.useState([])
    // const axios = require("axios");

    // const options = {
    //     method: 'GET',
    //     url: 'https://global-earthquake-watch.p.rapidapi.com/significant',
    //     headers: {
    //         'X-RapidAPI-Key': '4ff4ac9c02mshaab61d445c4c199p1a0808jsn49877f43f632',
    //         'X-RapidAPI-Host': 'global-earthquake-watch.p.rapidapi.com'
    //     }
    // };
    // React.useEffect(() => {

    //     axios.request(options).then(function (response) {
    //         setQuake(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    //     // eslint-disable-next-line
    // }, [])
    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Apollo 11',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'red',
                backgroundColor: 'red',
                borderWidth: 0.6,

            },
        ],
    };
    console.log(props.change)
    return (
        <div className="graph_outer_container">
            <div className={props.change ? "bigComponent" : "nomodal"}>
                <div className="line_container">

                <Line className="Line" options={options1} onClick={props.onClick} data={data} />
                </div>
            </div>
            <div className="graph_container">
                <div className="component">
                    <Line className="Line" options={options1} onClick={props.onClick} data={data} />
                </div>
            </div>
        </div>
    )
}