import React from 'react'
import RecentCustomers from './Cards/RecentCustomers';
import RectCard from './Cards/RectCard';
import SalesReport from './Cards/SalesReport';
import TrafficSources from './Cards/TrafficSources';
import Transactions from './Cards/Transactions';

type Props = {}

const DashboardMainContent = ({}: Props) => {
  return (
    <div className='h-full w-full bg-slate-100 overflow-clip'>
        <div className='mx-16 py-6'>
            <p><strong>Hey Mariana - </strong>here's what's happening with your store today</p>
        </div>
        <div className='grid grid-cols-4 gap-4 mx-16'>
            <RectCard title={`Today's Sale`} price={'12,426'} priceDiffPercent={34} diffStatus={true}/>
            <RectCard title={'Total Sales'} price={'2,38,485'} priceDiffPercent={14} diffStatus={false}/>
            <RectCard title={'Total Orders'} price={'84,382'} priceDiffPercent={36} diffStatus={true}/>
            <RectCard title={'Total Customers'} price={'33,493'} priceDiffPercent={36} diffStatus={true}/>
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
                <Transactions />
            </div>
            <div className='bg-white h-full rounded-lg'>
                <RecentCustomers />
            </div>
        </div>
    </div>
  )
}

export default DashboardMainContent;