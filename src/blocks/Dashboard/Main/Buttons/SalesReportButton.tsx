import React from 'react';

interface Props {
    value: string,
    onClick?: () => void,
}

const SalesReportButton = ({ value, onClick }: Props) => {
  return (
    <div className='rounded-md'>
        <button onClick={onClick} 
        className={"hover:bg-gray-100 focus-within:bg-gray-100 h-10 w-24"}
        >{value}</button>
    </div>
  )
}

export default SalesReportButton