import React from 'react'
import ProgressBar from './ProgressBar'

const TrafficSources = () => {

  const data = [
    {
      title: "Direct",
      width: "85%",
      total: "1,43,382"
    },
    {
      title: "Referral",
      width: "70%",
      total: "87,974"
    },
    {
      title: "Direct",
      width: "45%",
      total: "45,211"
    },
    {
      title: "Direct",
      width: "15%",
      total: "21,893"
    }
  ]
  return (
    <div>
      <div className='flex justify-between m-6'>
        <div className='font-bold'>
          <p>Traffic Sources</p>
        </div>
        <div>
          <p>Last 7 Days ^</p>
        </div>
      </div>
      <div className='m-6'>
        {data.map(({title, total, width}) => <ProgressBar Title={title} Total={total} width={width} />)}
      </div>
    </div>
  )
}

export default TrafficSources