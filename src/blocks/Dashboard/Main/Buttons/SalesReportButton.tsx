import React from 'react';

interface Props {
    value: string,
    onClick?: () => void,
}

const SalesReportButton = ({ value, onClick }: Props) => {
  return (
    <div className='rounded-md focus-within:border-red-500 peer-focus:outline-none'>
        <button onClick={onClick} className={"focus:bg-gray-100 px-4 peer-focus:ring-2 peer-focus:ring-blue-800 py-2 rounded-md"}>{value}</button>
    </div>
  )
}

export default SalesReportButton