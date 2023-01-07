import { useEffect, useState, } from 'react'
import './App.css'
import Dashboard from './blocks/Dashboard/Dashboard'
import HomePage from './blocks/HomePage/HomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loginStatus = localStorage.getItem('login-status')!;
    if(JSON.parse(loginStatus)){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  },[])
  return (
    <>
    {!isLoggedIn ? <HomePage /> : <Dashboard />}
    </>
  )
}

export default App
