import React, { Dispatch } from 'react'
import SidebarButtons from './Buttons/SidebarButtons';
import DashboardMainContent from './DashboardMainContent';
import DrawerTail from './Drawer/DrawerTail';

interface Props {
    isDrawerOpen: boolean,
    setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>,
    setShowModal: Dispatch<React.SetStateAction<boolean>>,
    logoutHandler?: () => void
}

const SideBarButtonsData = {
    Analytics: [
        {
            text: "Performance",
            iconClass: "fa-solid fa-chart-simple",
        },
        {
            text: "Hotjar",
            iconClass: "fa-brands fa-hotjar",
        }
    ],
    Support: [
        {
            text: "Tickets",
            iconClass: "fa-solid fa-ticket",
        },            
        {
            text: "Agents",
            iconClass: "fa-solid fa-user",
        },
        {
            text: "Customers",
            iconClass: "fa-solid fa-user",
        }
    ],
    Shop: [
        {
            text: "Products",
            iconClass: "fa-solid fa-folder",
        },
        {
            text: "Orders",
            iconClass: "fa-solid fa-bell",
        },
        {
            text: "Reports",
            iconClass: "fa-solid fa-flag",
        }
    ],
    Others: [
        {
            text: "Settings",
            iconClass: "fa-solid fa-gear",
        },
        {
            text: "Logout",
            iconClass: "fa-solid fa-arrow-right-from-bracket",
        }
    ]
}


function alertNotImplented(text: string): void {
    alert(text + " Not Implented Yet")
}


const DashboardMain = ({ isDrawerOpen, setIsDrawerOpen, logoutHandler, setShowModal}:Props) => {

    const DashboardContent = (
        <div className='flex flex-col justify-between h-[88vh] cursor-pointer bg-slate-100 text-slate-600 font-sans font-bold'>
            <div className='flex flex-col h-96 justify-evenly'>
                <div className='mt-16'>
                    <div
                    onClick={() => setShowModal(true)}
                    className='flex justify-around items-center w-[230px] hover:opacity-[0.8] text-white bg-indigo-600 p-3 rounded-lg mt-20'>
                        <i className="fa-solid fa-plus"/>
                        <p className=''>Connect New Account</p>
                    </div>
                    <ul>
                        <li className='mt-10'>
                            <SidebarButtons iconClass={'fa-solid fa-house text-slate-500'} extraStyle={'bg-slate-200'} text={'Dashboard'} />
                        </li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <p className='font-bold uppercase text-slate-300'>Analytics</p>
                    <ul title='Analytics' className='mt-4'>
                        {SideBarButtonsData.Analytics.map(({iconClass, text}) => <SidebarButtons key={text} iconClass={iconClass} text={text} onClick={() => {
                            alertNotImplented(text)
                        }} />)}
                    </ul>
                </div>
                <div className='mt-4'>
                    <h4 className='font-bold uppercase text-slate-300'>Support</h4>
                    <ul className='mt-4'>
                        {SideBarButtonsData.Support.map(({iconClass, text}) => <SidebarButtons key={text} iconClass={iconClass} text={text} onClick={() => {
                            alertNotImplented(text)
                        }} />)}
                    </ul>
                </div>
                <div className='mt-4'>
                    <h4 className='font-bold uppercase text-slate-300'>Shop</h4>
                    <ul className='mt-4'>
                        {SideBarButtonsData.Shop.map(({iconClass, text}) => <SidebarButtons key={text} iconClass={iconClass} text={text} onClick={() => {
                            alertNotImplented(text)
                        }} />)}
                    </ul>
                </div>
            </div>
            <div>
                <ul className='mt-4'>
                    {/* <li className="mt-4">Settings</li>
                    <li className="cursor-pointer mt-4" onClick={logoutHandler}>Logout</li> */}
                    {SideBarButtonsData.Others.map(({iconClass, text}) => <SidebarButtons key={text} iconClass={iconClass} text={text} onClick={
                        text === "Logout" ? logoutHandler : () => alertNotImplented(text)
                    } />)}
                </ul>
            </div>
        </div>
    ) 


  return (
    <div className='bg-slate-100'>
        <DrawerTail isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} sideChildren={DashboardContent}>
            <>
                <DashboardMainContent isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}/>
            </>
        </DrawerTail>
    </div>
  )
}

export default DashboardMain
