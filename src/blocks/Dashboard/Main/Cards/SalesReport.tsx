import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import SalesReportButton from '../Buttons/SalesReportButton';
// @ts-ignore
import faker from 'faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { fetchSalesReport } from '../../../../api_calls/GET_REQUEST';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const options = {
    responsive: true,
    filler: true
}

const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

const LineChartData = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 200000, max: 400000 })),
        tension: 0.5,
        backgroundColor: 'transparent',
        borderColor: '#2455ab',
        pointHoverRadius: 3,
        pointBorderWidth: 0,
        pointHitWidth: 3,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#2455ab',
        fill: {
            target: 'origin',
        }
      },
      {
        data: labels.map(() => faker.datatype.number({ min: 10000, max: 200000 })),
        tension: 0.5,
        backgroundColor: 'transparent',
        borderColor: '#6193e8',
        pointHoverRadius: 3,
        pointBorderWidth: 0,
        pointHitWidth: 3,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#2455ab',
        fill: {
            target: 'origin',
            above: '#f7fbff'
        }
      },
    ],
  };

  const initialChartData = {
    data: LineChartData,
  }

interface Props {

}

const initialGSD = {
    todaySales: 0,
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0
}
const SalesReport = ({ }: Props) => {
    
    const [SalesReportData, setSalesReportData] = useState([])

    const [gridSalesData, setGSD] = useState(initialGSD)

    useEffect(() => {
        fetchSalesReport().then(result => {
            setSalesReportData(result)
        }).catch((err) => {
            alert(err.message)
        })
    },[])

    const [filteredChartData, setFilteredChartData] = useState(initialChartData);

    const filterChartBy6Months = () => {
        const filteredlabels = labels.filter((item, index) => index >= 6 && item)
        console.log(filteredlabels, "FilteredLabels") 
        const filteredLineChartData = {
            data: {
                labels: filteredlabels,
                datasets: [
                    {
                        ...LineChartData.datasets[0],
                        data: filteredlabels.map(() =>  faker.datatype.number({ min: 200000, max: 400000 })),
                    },
                    {
                        ...LineChartData.datasets[1],
                        data: filteredlabels.map(() => faker.datatype.number({ min: 10000, max: 200000 })),
                    }
                ]
            }
        }
        console.log(filteredLineChartData, "FLCData")
        setFilteredChartData(filteredLineChartData)
    }

    const filterBy12Months = () => {
        setFilteredChartData(initialChartData)
    }

    const filterChartBy30Days = () => {
        let temp = new Array(31);
        for(let i=0; i < temp.length; i++){
            temp[i] = `${i+1}`
        }
        const filteredlabels = temp
        
        const filteredLineChartData = {
            data: {
                labels: filteredlabels,
                datasets: [
                    {
                        ...LineChartData.datasets[0],
                        data: filteredlabels.map(() =>  faker.datatype.number({ min: 200000, max: 400000 })),
                    },
                    {
                        ...LineChartData.datasets[1],
                        data: filteredlabels.map(() => faker.datatype.number({ min: 10000, max: 200000 })),
                    }
                ]
            }
        }
        setFilteredChartData(filteredLineChartData)
    }

    const filterChartBy7Days = () => {
        const filteredlabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const filteredLineChartData = {
            data: {
                labels: filteredlabels,
                datasets: [
                    {
                        ...LineChartData.datasets[0],
                        data: filteredlabels.map(() =>  faker.datatype.number({ min: 200000, max: 400000 })),
                    },
                    {
                        ...LineChartData.datasets[1],
                        data: filteredlabels.map(() => faker.datatype.number({ min: 10000, max: 200000 })),
                    }
                ]
            }
        }

        setFilteredChartData(filteredLineChartData)
    }

  return (
    <>
        <div className='grid grid-cols-3 justify-between font-sans'> 
            <div className='flex justify-start p-4 font-bold text-lg'>
                <p>Sales Report</p> 
            </div>
            <div className='flex justify-evenly p-2'>
                <SalesReportButton value='12 Months' onClick={filterBy12Months}/>
                <SalesReportButton value='6 Months' onClick={filterChartBy6Months}/>
                <SalesReportButton value='30 Days' onClick={filterChartBy30Days}/>
                <SalesReportButton value='7 Days' onClick={filterChartBy7Days}/>
            </div>
            <div className='flex justify-end p-4'>
                <button className='flex items-center justify-center hover:bg-gray-100 border-2 px-2 py-1 rounded-md'
                onClick={() => alert("This function is not implemeted")}>
                <i className="fa-solid fa-file-arrow-down"/>
                <p className='font-bold ml-2'>Export PDF</p>   
                </button>
            </div> 
        </div>
        <div className='flex justify-center mx-8 my-8'>
            {/* Chart Sales */}
            <Line data={filteredChartData.data} options={options} width={2500} height={650} />
        </div>
    </>
  )
}

export default SalesReport