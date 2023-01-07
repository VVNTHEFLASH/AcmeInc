import React, { Dispatch } from 'react'
import DashboardMainContent from './DashboardMainContent';
import DrawerTail from './Drawer/DrawerTail';

interface Props {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>,
}

const DashboardContent:JSX.Element = (
    <div className='flex flex-col justify-between h-[88vh]'>
        <div className='flex flex-col h-96 justify-evenly'>
            <div>
                <ul>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div>
                <p className='font-bold uppercase'>Analytics</p>
                <ul title='Analytics' className='mt-4'>
                    <li className="1">Performance</li>
                    <li className="2">Hotjar (New)</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold uppercase'>Support</h4>
                <ul className='mt-4'>
                    <li className="1">Tickets</li>
                    <li className="2">Agents</li>
                    <li className="3">Customers</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold uppercase'>Shop</h4>
                <ul className='mt-4'>
                    <li className="1">Products</li>
                    <li className="2">Orders</li>
                    <li className="3">Reports</li>
                </ul>
            </div>
        </div>
        <div>
            <ul className='mt-4'>
                <li className="1">Settings</li>
                <li className="2">Logout</li>
            </ul>
        </div>
    </div>
)

const DashboardMain = ({ isDrawerOpen, setIsDrawerOpen}:Props) => {
  return (
    <div className='flex'>
        <DrawerTail isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} sideChildren={DashboardContent}>
            <>
                <DashboardMainContent />
            </>
        </DrawerTail>
    </div>
  )
}

export default DashboardMain