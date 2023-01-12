import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const TrafficSources = () => {

  const data = [
    {
      title: "Direct",
      width: "85%",
      total: 143382
    },
    {
      title: "Referral",
      width: "70%",
      total: 87974
    },
    {
      title: "Social Media",
      width: "45%",
      total: 45211
    },
    {
      title: "Twitter",
      width: "15%",
      total: 21893
    }
  ]

  const [filteredData, setFilteredData] = useState(data);



  useEffect(() => {
    const sumOfData = data.slice(0).reduce(
      (accumulator, currentValue) => accumulator + (currentValue.total),
      0
    );

    console.log(sumOfData)
    
      const temp = data.slice(0).map((item) => {
        const total = `${Math.round((item.total/200000) * 100)}%`
        return { ...item, width: total }
      })
      setFilteredData(temp)
  }, [])
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mx-4 mt-6'>
        <div className='font-bold'>
          <p>Traffic Sources</p>
        </div>
        <div>
          <p>Last 7 Days ^</p>
        </div>
      </div>
      <div className='mx-4 flex flex-col justify-center'>
        {filteredData.map(({title, total, width}) => <ProgressBar key={title} Title={title} Total={total} width={width} />)}
      </div>
    </div>
  )
}

export default TrafficSources