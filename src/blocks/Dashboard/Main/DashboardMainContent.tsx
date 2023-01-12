import React, { useEffect, useState } from 'react'
import { fetchCT, fetchSalesReport } from '../../../api_calls/GET_REQUEST';
import RecentCustomers from './Cards/RecentCustomers';
import RectCard from './Cards/RectCard';
import SalesReport from './Cards/SalesReport';
import TrafficSources from './Cards/TrafficSources';
import Transactions from './Cards/Transactions';

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardMainContent = ({ isOpen, setIsOpen}: Props) => {

    const [CTData, setCTData] = useState([])
    const [SRData, setSRData] = useState([])
    const [userdata, setUserdata] = useState({
        name: ''
    })
    useEffect(() => {
        getNameFromLS()
        fetchCT().then(result => {
            setCTData(result)
        }).catch(err => alert(err.message))
        fetchSalesReport().then((result) => {
            setSRData(result)
        }).catch(err => alert(err.message))
    }, [])

    function getNameFromLS() {
        const res = localStorage.getItem('login-status')!;
        const parsedResult =  JSON.parse(res)
        setUserdata({ ...userdata, name: parsedResult.name})
    } 

  return (
    <div className='h-full w-full bg-slate-100 overflow-clip'>
        {!isOpen && <div className='p-1 rounded-lg bg-indigo-600 w-20 text-center text-white hover:opacity-70 cursor-pointer' onClick={() => setIsOpen(true)}>
            Open Sidebar
        </div>}
        <div className='mx-16 py-6'>
            <p><strong>Hey {userdata.name} - </strong>here's what's happening with your store today</p>
        </div>
        <div className='grid grid-cols-4 gap-4 mx-16'>
            <RectCard title={`Today's Sale`} price={"12,426"} priceDiffPercent={34} diffStatus={true}/>
            <RectCard title={'Total Sales'} price={"2,38,485"} priceDiffPercent={14} diffStatus={false}/>
            <RectCard title={'Total Orders'} price={"84,382"} priceDiffPercent={36} diffStatus={true}/>
            <RectCard title={'Total Customers'} price={"33,493"} priceDiffPercent={36} diffStatus={true}/>
        </div>
        <div className='grid grid-cols-70/30 mx-16 my-6 gap-6'>
            <div className='bg-white h-full rounded-lg'>
                <SalesReport />
            </div>
            <div className='bg-white h-full rounded-lg'>
                <TrafficSources />
            </div>
        </div>
        <div className='grid grid-cols-70/30 mx-16 my-6 gap-6'>
            <div className='bg-white h-full rounded-lg'>
                <Transactions data={CTData} />
            </div>
            <div className='bg-white h-full rounded-lg'>
                <RecentCustomers data={CTData} />
            </div>
        </div>
    </div>
  )
}

export default DashboardMainContent;