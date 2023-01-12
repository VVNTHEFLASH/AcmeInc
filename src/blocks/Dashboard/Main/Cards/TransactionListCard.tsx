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


    const renderByStatus = (status: string) => {
        if(status === "Completed"){
            return ["mx-2", " text-green-500 text-[8px]", "text-[#3E7B54] bg-[#e1fbeb]"]
        }
        else if(status === "Pending"){
            return ["mx-2"," text-[8px] text-yellow-300", "text-yellow-800 bg-[#fef9ce]"]
        }
        else {
            return ["mx-2", " text-[8px] text-red-600","text-red-900 bg-[#FFE8E8]"]
        }
    }
  return (
    <>
        <div className='grid grid-cols-5x5column text-[14px]'>
            <div className='flex flex-col justify-center font-[600]'>
                <div 
                className={renderByStatus(data.status)[2]+ " flex w-[120px] items-center mx-auto rounded-full p-1"}
                >
                    <i className={"fa-solid fa-circle ml-2"+ renderByStatus(data.status)[1]}></i>
                    <button className={renderByStatus(data.status)[0]+ " "}>{data.status ?? "NA"}</button>
                </div>
            </div>
            <div className=''>
                <div className='p-2'>
                <h5 className='font-bold mb-2 mt-2'>{`${data.details.payment_type ?? "NA"} ${maskAccountId(data.details.payment_no) ?? "NA"}`}</h5>
                <p className='text-[#A3A3A9] mb-2'>{data.details.payment_type ?? "Card Type NA"}</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h5 className='font-bold'>{`$${data.vendor.price ?? "NA"}`}</h5>
                    <p className='text-slate-500'>{data.vendor.date ?? "NA"}</p>
                </div>
            </div>
            <div className='text-slate-500 flex items-center'>
                <p>{data.vendor.name ?? "NA"}</p>
            </div>
            <div className='flex items-center justify-end mr-8 '>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        {index < 3  && <hr />}
    </>
  )
}

export default TransactionListCard;

const maskAccountId = (accountId: string) => {
    if (accountId) { /** Condition will only executes if accountId is *not* undefined, null, empty, false or 0*/
      const accountIdlength = accountId.length;
      const maskedLength = accountIdlength - 4; /** Modify the length as per your wish */
      let newString = accountId;
      for (let i = 0; i < accountIdlength; i++) {
        if (i < maskedLength) {
          newString = newString.replace(accountId[i], '*');
        }
      }
      return newString;
    } else return /**Will handle if no string is passed */
  }