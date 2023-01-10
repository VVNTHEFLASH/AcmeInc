import React from 'react'

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
const CustomersListCard = ({ data, index }: Props) => {
  return (
    <div className='grid grid-cols-header-262 my-6'>
        <div>
            <div className='h-10 w-10 bg-slate-100 rounded-full'>
                {/* <img src={""} alt="profile" /> */}
            </div>
        </div>
        <div>
            <div>
                <p className='font-bold'>{data.name}</p>
                <p className='text-gray-500'>{data.email}</p>
            </div>
        </div>
        <div>
            <div>
                <p>{data.spends}</p>
                <p className='text-gray-500'>{data.city}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomersListCard