import React from 'react'

interface Props {
    Title: string,
    Total: number,
    width: string,
}

function readDoller(num: number){
  return num.toLocaleString("en-US")
}

const ProgressBar = ({Title, Total, width}: Props) => {
  return (
    <div className='text-sm mt-5'>
        <div className='flex justify-between mb-2'>
            <p>{Title}</p>
            <p>{readDoller(Total)}</p>
        </div>
        <div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-3">
            <div className="bg-indigo-500 h-1.5 rounded-full" style={{width}}></div>
        </div>
        </div>
    </div>
  )
}

export default ProgressBar