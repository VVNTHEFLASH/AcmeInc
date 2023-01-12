import React, { useEffect, useState } from 'react'
import LoginForm from './Login/LoginForm';
import copy from 'copy-to-clipboard';

const HomePage = () => {

  const [showLoginForm, setShowLoginForm] = useState(false)
  const [trigger, setTrigger] = useState(false)

  const showLoginFormHandler = () =>{
      setShowLoginForm(true)
  }

  const hideLoginFormHandler = () => {
    setShowLoginForm(false)
  }

  const copyUsername = () => {
    copy("user@gmail.com")
    setTrigger(!trigger)
  }
  const copyPassword = () => {
    copy("12341234")
    setTrigger(!trigger)
  }

  useEffect(() => {
    navigator.clipboard.readText()
    .then((text) => {
      console.log(text);
    })
  }, [trigger])
  

  return (
    <>
      <div className='grid grid-cols-2 h-screen'>
        <div className='flex justify-center items-center border-r-4 border-teal-500'>
          <ul>
            <li>Welcome to Acme Inc</li>
            <li id='defusername'>Username:- {"user@gmail.com"} <button className='p-1 hover:underline' onClick={copyUsername}>Copy</button> </li>
            <li id='defpassword'>Password:- {"12341234"} <button className='p-1 hover:underline' onClick={copyPassword}>Copy</button> </li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center flex-col'>
            {showLoginForm && <LoginForm />}
            {showLoginForm && <button onClick={hideLoginFormHandler} className={'bg-slate-500 hover:text-white mt-6 py-2'}>Cancel</button>}
            {!showLoginForm && <button onClick={showLoginFormHandler} className={'bg-sky-600 hover:text-white mt-6 px-16 py-3'}>Login</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage