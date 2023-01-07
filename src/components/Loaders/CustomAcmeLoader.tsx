import React from 'react'
import AcmeImage from "../../assets/acme_vfcz-z1.png"
const CustomAcmeLoader = () => {
  return (
    <div className='h-max w-max'>
    <img src={AcmeImage} alt="Acme Image" className='h-max w-max animate-pulse'/>
    </div>
  )
}

export default CustomAcmeLoader