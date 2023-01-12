import React from 'react'
import profile from "../../../../assets/profile.png"
interface Props {
    data: {
        name: string,
        spends: number,
        email: string,
        profile_picture: string,
        city: string
    },
    index: number
}

function readDoller(num: number){
    return num.toLocaleString("en-US")
}

const CustomersListCard = ({ data, index }: Props) => {

  return (
    <div className='grid grid-cols-header-262 my-6'>
        <div>
            <div className='h-10 w-10 bg-slate-100 rounded-full'>
                <img src={data.profile_picture ?? profile} alt="profile" />
            </div>
        </div>
        <div>
            <div>
                <p className='font-bold'>{data.name ?? "NA"}</p>
                <p className='text-gray-500'>{data.email ?? "NA"}</p>
            </div>
        </div>
        <div>
            <div>
                <p>${readDoller(data.spends) ?? "$NA"}</p>
                <p className='text-gray-500'>{data.city ?? "NA"}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomersListCard