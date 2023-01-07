import React from 'react';
import AcmeHeaderLogo from "../../../assets/acme-inc-tp.png";

const DashboardHeader = () => {
  return (
    <>
        <div className='grid grid-cols-3 p-2'>
            <div className='flex justify-start'>
                <img src={AcmeHeaderLogo} alt="Logo" className='h-8'/>
            </div>
            <div className='flex justify-center'>
                <i>Search ICON</i>
                <input type="search" name="" id="" />
            </div>
            <div className='flex justify-end'>
                <i>Mail</i>
                <i>Bell</i>
                <i>Profile Image</i>
            </div>
        </div>
    </>
  )
}

export default DashboardHeader