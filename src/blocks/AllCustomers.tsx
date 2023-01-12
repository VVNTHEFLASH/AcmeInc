import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CustomersListCard from './Dashboard/Main/Cards/CustomersListCard';
const AllCustomers = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const { data } = state;
  return (
    <>
    <div>
        <div>
            <div onClick={() => navigate(-1)} className='m-3 bg-slate-200 w-40 text-center p-2 hover:bg-slate-500'>
                <button>Go Back</button>
            </div>
            <div className='text-center font-source-sans-pro font-bold text-3xl'>
                <h1>All Customers</h1>
            </div>
        </div>
        <div>
            {data.map((item: any, index: number) => <CustomersListCard key={index} data={item} index={index} />)}
        </div>
    </div>
    </>
  )
}

export default AllCustomers