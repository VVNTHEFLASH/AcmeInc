import React from 'react'

interface Props {
    data: {
        status: string,
        vendor: {
            name: string,
            date: string,
            currency: string,
            price: number
        },
        details: {
            payment_no: string,
            payment_type: string,
        }
    },
    index: number
}


const TransactionListCard = ({data, index}: Props) => {
    console.log(data, "TLC")

    const renderByStatus = (status: string) => {
        if(status === "Completed"){
            return ["mx-2", " text-green-500 text-[8px]", "text-green-800 bg-green-100"]
        }
        else if(status === "Pending"){
            return ["mx-2"," text-[8px] text-yellow-300", "text-yellow-800 bg-yellow-100"]
        }
        else{
            return ["mx-2", " text-[8px] text-red-600","text-red-900 bg-red-100"]
        }
    }
  return (
    <>
        <div className='grid grid-cols-5x5column text-[14px]'>
            <div className='flex flex-col justify-center'>
                <div 
                className={renderByStatus(data.status)[2]+ " flex w-[120px] items-center mx-auto rounded-full p-1"}
                >
                    <i className={"fa-solid fa-circle ml-2"+ renderByStatus(data.status)[1]}></i>
                    <button className={renderByStatus(data.status)[0]+ " font-[600]"}>{data.status}</button>
                </div>
            </div>
            <div className='p-2 flex flex-col justify-center items-center'>
                <div className=''>
                <h5 className='font-bold mb-2 mt-2'>{`${data.details.payment_type} ${data.details.payment_no}`}</h5>
                <p className='text-slate-500 mb-2'>{data.details.payment_type.includes("card") ? "Card Payment" : "Bank payment"}</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h5 className='font-bold'>{`$${data.vendor.price}`}</h5>
                    <p className='text-slate-500'>{data.vendor.date}</p>
                </div>
            </div>
            <div className='text-slate-500 flex items-center'>
                <p>{data.vendor.name}</p>
            </div>
            <div className='flex items-center justify-end mr-8 '>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        {index < 3  && <hr />}
    </>
  )
}

export default TransactionListCard