import React from 'react';

interface Props {
    value: string,
    onClick?: () => void,
}

const SalesReportButton = ({ value, onClick }: Props) => {
  return (
    <div>
        <button onClick={onClick} 
        className={"hover:bg-gray-100 focus-within:bg-gray-100 h-10 w-28 mx-2"}
        >{value}</button>
    </div>
  )
}

export default SalesReportButton