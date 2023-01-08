import React, { Dispatch } from 'react'
import DashboardMainContent from './DashboardMainContent';
import DrawerTail from './Drawer/DrawerTail';

interface Props {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>,
    logoutHandler?: () => void
}

const DashboardMain = ({ isDrawerOpen, setIsDrawerOpen, logoutHandler}:Props) => {

    const DashboardContent = (
        <div className='flex flex-col justify-between h-[88vh] cursor-pointer bg-slate-100 text-slate-600 font-sans font-bold'>
            <div className='flex flex-col h-96 justify-evenly'>
                <div className='mt-16'>
                    <div className='flex justify-around items-center w-[280px] hover:opacity-[0.8] text-white bg-indigo-600 p-3 rounded-lg mt-20'>
                        <i className="fa-solid fa-plus"/>
                        <p className=''>Connnect New Account</p>
                    </div>
                    <ul>
                        <li className='mt-4'><i className="fa-solid fa-house text-slate-500"></i> Dashboard</li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <p className='font-bold uppercase text-slate-300'>Analytics</p>
                    <ul title='Analytics' className='mt-4'>
                        <li className="mt-4"><i className="fa-solid fa-chart-simple"></i> Performance</li>
                        <li className="mt-4"><i className="fa-brands fa-hotjar"></i> Hotjar (New)</li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <h4 className='font-bold uppercase text-slate-300'>Support</h4>
                    <ul className='mt-4'>
                        <li className="mt-4"><i className="fa-solid fa-ticket"></i> Tickets</li>
                        <li className="mt-4"><i className="fa-solid fa-user"></i> Agents</li>
                        <li className="mt-4 relative right-2">
                            <i className="fa-solid fa-user relative left-2 text-gray-500"/>
                            <i className="fa-solid fa-user"/> Customers
                        </li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <h4 className='font-bold uppercase text-slate-300'>Shop</h4>
                    <ul className='mt-4'>
                        <li className="mt-4"><i className="fa-solid fa-folder"></i> Products</li>
                        <li className="mt-4"><i className="fa-solid fa-bell"></i> Orders</li>
                        <li className="mt-4"><i className="fa-solid fa-flag"></i> Reports</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='mt-4'>
                    <li className="mt-4">Settings</li>
                    <li className="cursor-pointer mt-4" onClick={logoutHandler}>Logout</li>
                </ul>
            </div>
        </div>
    ) 


  return (
    <div className='bg-slate-100'>
        <DrawerTail isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} sideChildren={DashboardContent}>
            <>
                <DashboardMainContent />
            </>
        </DrawerTail>
    </div>
  )
}

export default DashboardMain