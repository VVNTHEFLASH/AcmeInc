import React from 'react'
import { useNavigate } from 'react-router-dom'
import AcmeImage from "../../assets/acme_vfcz-z1.png"

const DashboardWelcome = () => {

    const navigate = useNavigate()
    const navigateToEmployees = () => {
        navigate("employees")
    }
  return (
    <div className='flex flex-col items-center h-screen'>
        <span className='mt-8 text-3xl'>Welcome to Acme Inc</span>
        <span className='hover:underline text-yellow-900 font-bold cursor-pointer'
        onClick={navigateToEmployees}>Click here to view employees</span>
        <div className='h-max w-max'>
          <img src={AcmeImage} alt="Acme Image" className='h-max w-max'/>
        </div>
    </div>
  )
}

export default DashboardWelcome