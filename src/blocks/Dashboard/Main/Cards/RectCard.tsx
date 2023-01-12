import React from 'react'

interface Props {
    title: string,
    price: string,
    priceDiffPercent: number,
    diffStatus?: boolean
}

const RectCard = ({ title, price, priceDiffPercent, diffStatus}: Props) => {

    const diffStatusCheck = () => {
        if(diffStatus) {
            return "text-green-600"
        }
        else {
            return "text-red-600"
        }  
    }
    return (
        <div className='bg-white p-4 py-2 rounded-md h-30 flex flex-col font-semibold border-2'>
            <div className='uppercase text-slate-300 font-mono my-1'>
                <p>{title}</p>
            </div>
            <div className='flex justify-between my-2 font-mono text-2xl'>
                <div>
                    <p>${price}</p>
                </div>
                <div className={diffStatusCheck() + " font-poppins text-[18px]"}>+{priceDiffPercent}%{priceDiffPercent > 15 ? <i className='fa-solid fa-arrow-up text-xs relative left-1 bottom-2'></i> : <i className='fa-solid fa-arrow-down text-xs relative left-1 bottom-2'></i>}</div>
            </div>
        </div>
    )
}

export default RectCard