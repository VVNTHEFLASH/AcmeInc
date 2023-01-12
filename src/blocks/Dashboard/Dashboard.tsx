import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import DashboardWelcome from '../../components/Others/DashboardWelcome';
import Employees from '../Employees/Employees';
import DashboardHeader from './Header/DashboardHeader';
import DashboardMain from './Main/DashboardMain';
import { Sidebar } from "flowbite-react";
import { BaseURL } from "../../../secret"
import SignUpModal from './Modal/SignUpModal';

const Dashboard = () => {
  const { state } = useLocation();
  // const { data } = state;
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem('login-status', JSON.stringify(false))
    navigate('/homepage')
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    {/* <div className='flex flex-col-reverse h-max'>
      <Routes>
        <Route path='/' element={<DashboardWelcome />} />
        <Route path='employees' element={<Employees />} />
      </Routes>
      <hr />
      <div className='text-center justify-end flex m-4'>
        <div className='m-1 p-1'>
          <label className='underline cursor-pointer'>Welcome {data.firstName}</label>
        </div>
        <div onClick={logoutHandler} className="bg-red-600 p-1 m-1 cursor-pointer hover:bg-green-200" >
          Logout
        </div>
      </div>
    </div> */}
    <div id='DashboardContainer' className='h-[80vh]'>
      <DashboardHeader isDrawerOpen={setIsDrawerOpen} />
      <hr />
      <DashboardMain isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} logoutHandler={logoutHandler} setShowModal={setShowModal} />
    </div>
    <SignUpModal setShowModal={setShowModal} showModal={showModal}/>
    </>
  )
}

export default Dashboard