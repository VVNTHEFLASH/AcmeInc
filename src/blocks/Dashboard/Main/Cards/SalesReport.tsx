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

type MonthData = {
    date: number,
    newDate: number,
    sales: number,
    _id: string
}

interface MonthDataProps {
    Jan: MonthData[],
    Feb: MonthData[],
    Mar: MonthData[],
    Apr: MonthData[],
    May: MonthData[],
    Jun: MonthData[],
    Jul: MonthData[],
    Aug: MonthData[],
    Sep: MonthData[],
    Oct: MonthData[],
    Nov: MonthData[],
    Dec: MonthData[],
}
const initialMonthlyData: MonthDataProps = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
}
const SalesReport = ({ }: Props) => {
    
    const [SalesReportData, setSalesReportData] = useState([])

    const [gridSalesData, setGSD] = useState(initialGSD);

    const [sortSalesDataByMonths, setSortSalesDataByMonths] = useState(initialMonthlyData)

    useEffect(() => {
        fetchSalesReport().then(result => {
            setSalesReportData(result)
        }).catch((err) => {
            alert(err.message)
        })
    },[])

    const convertSalesDataToMonthly = () => {
        const data = SalesReportData.slice(0);
        // map data to months
        data.map((item: MonthData, index: number) => {
            if(index < 31){
                item.newDate = index + 1;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Jan: sortSalesDataByMonths.Jan.push(item) })
            }
            else if(index >= 31 && index < 59){
                // console.log(((index+1) - 31), "feb");
                item.newDate = (index + 1) -31;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Feb: sortSalesDataByMonths.Feb.push(item) })
            }
            else if(index >= 59 && index < 90){
                // console.log(((index+1) - 59), "mar");
                item.newDate = (index + 1) - 59;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Mar: sortSalesDataByMonths.Mar.push(item) })
            }
            else if(index >= 90 && index < 120){
                // console.log((index + 1) - 90, "Apr")
                item.newDate = (index + 1) - 90;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Apr: sortSalesDataByMonths.Apr.push(item) })
            }
            else if(index >= 120 && index < 151){
                // console.log((index + 1) - 120, "May")
                item.newDate = (index + 1) - 120;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, May: sortSalesDataByMonths.May.push(item) })
            }
            else if(index >= 151 && index < 181){
                // console.log((index + 1) - 151, "Jun")
                item.newDate = (index + 1) - 151;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Jun: sortSalesDataByMonths.Jun.push(item) })
            }
            else if(index >= 181 && index < 212){
                // console.log((index + 1) - 181, "Jul")
                item.newDate = (index + 1) - 181;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Jul: sortSalesDataByMonths.Jul.push(item) })
            }
            else if(index >= 212 && index < 243){
                // console.log((index + 1) - 212, "Aug")
                item.newDate = (index + 1) - 212;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Aug: sortSalesDataByMonths.Aug.push(item) })
            }
            else if(index >= 243 && index < 273){
                // console.log((index + 1) - 243, "Sep")
                item.newDate = (index + 1) - 243;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Aug: sortSalesDataByMonths.Sep.push(item) })
            }
            else if(index >= 273 && index < 304){
                // console.log((index + 1) - 273, "Oct")
                item.newDate = (index + 1) - 273;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Oct: sortSalesDataByMonths.Oct.push(item) })
            }
            else if(index >= 304 && index < 334){
                // console.log((index + 1) - 304, "Nov")
                item.newDate = (index + 1) - 304;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Nov: sortSalesDataByMonths.Nov.push(item) })
            }
            else if(index >= 334 && index < 365){
                // console.log((index + 1) - 334, "Dec")
                item.newDate = (index + 1) - 334;
                // @ts-ignore
                setSortSalesDataByMonths({ ...sortSalesDataByMonths, Dec: sortSalesDataByMonths.Dec.push(item) })
            }
            return item;
        })
    }

    const getSortedDataByMonth = (month: string) => {
        let obj = sortSalesDataByMonths;
        const result = [];

        for(let key of Object.keys(obj)){
            // @ts-ignore
            if(key.match(month)) result.push(obj[key])
        }

        console.log(result)
    }




    const dailyDataConvertToMonthlyData = () => {
        const data: MonthDataProps = sortSalesDataByMonths;
        const keys = Object.keys(data)
        const result = [];
        const Jan = data.Jan.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Feb = data.Feb.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Mar = data.Mar.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Apr = data.Apr.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const May = data.May.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Jun = data.Jun.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Jul = data.Jul.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Aug = data.Aug.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Sep = data.Sep.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Oct = data.Oct.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Nov = data.Nov.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        const Dec = data.Dec.slice(0).map((item: MonthData) => item.sales).reduce((a, b) => b + a,0)
        result.push({
            Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
        })
    }

    // ------------------------------------------------------------------
    // const [filteredChartData, setFilteredChartData] = useState(initialChartData);
    const RealLineChartData = {
        labels: Object.keys(sortSalesDataByMonths),
        datasets: [
            {
                data: []
            }
        ]
    }
    const RealChartData = {
        data: RealLineChartData
    }
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
                <p onClick={() => {
                    // getTotalSales()
                    // getTodaySales()
                    // convertSalesDataToMonthly()
                    // getSortedDataByMonth('Jan')
                    // dailyDataConvertToMonthlyData()
                }}>Sales Report</p> 
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