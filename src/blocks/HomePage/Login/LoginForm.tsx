import React, { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BasicSpinner from '../../../components/Loaders/BasicSpinner';
import CustomAcmeLoader from '../../../components/Loaders/CustomAcmeLoader';

const initialState = {
    username: '',
    password: '',
    loginstatus: true
}

type changeEvent = ChangeEvent<HTMLInputElement>;

const LoginForm = () => {

    const navigate = useNavigate();

    const [loginData, setloginData] = useState(initialState)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const loginHandler = async () => {
        if(loginData.username.length < 6){
            return setError("Username should have minimum of 5 letters")
        }
        else if(loginData.password.length < 6){
            return setError("Password should have minimum of 5 characters")
        }
        setLoading(true)
        try{
            setError('')
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            
            var body = JSON.stringify({
              "username": loginData.username,
              "password": loginData.password
            });
            
            var requestOptions = {
              method: 'POST',
              headers,
              body,
            };
            const response = await fetch('https://dummyjson.com/auth/login', requestOptions)
            const responseJson = await response.json();
            if(responseJson?.message === 'Invalid credentials') { 
                console.log(responseJson);
                return setError(responseJson.message)
            }
                else if(!responseJson?.message){
                localStorage.setItem('login-status', JSON.stringify(responseJson))
                localStorage.setItem('token', JSON.stringify(responseJson.token))
                navigate('dashboard', { state: { data: responseJson } })
                console.log(responseJson, "try");
            }
        }
        catch(err: any){
            setError(err.message)
            console.log(err, "Error");
            
        }
        finally{
            setLoading(false);
            setloginData(initialState)
        }
    }

    const onChangeUsernameHandler = (e: changeEvent) => {
        setloginData({ ...loginData, username: e.target.value })
        setError('')
    }

    const onChangePasswordHandler = (e: changeEvent) => {
        setloginData({ ...loginData, password: e.target.value })
        setError('')
    }

    const [trigger, setTrigger] = useState(false)
    const [copiedText, setCopiedText] = useState("")
    useEffect(() => {
        navigator.clipboard.readText()
        .then((text) => {
          setCopiedText(text)
        })
      }, [trigger])

  return (
    <>
    <div className=''>
        {copiedText && <p>Double click to paste the copied text</p>}
        { !loading && <form action="" method="post">
            <div className='flex flex-col mt-6'>
                <label>Username</label>
                <input 
                type="text" name="" id="Username"
                value={loginData.username} 
                className='border-b-2 outline-none border-blue-800 bg-sky-300 pl-2 py-1'
                onChange={(e) => onChangeUsernameHandler(e)}
                onDoubleClick={() => {
                    navigator.clipboard.readText()
                    .then((copiedText) => {
                        setCopiedText('')
                        setloginData({...loginData, username: copiedText})
                    })
                }}/>
            </div>
            <div className='flex flex-col mt-6'>
                <label>Password</label>
                <input type="password" name="Password" id="" 
                value={loginData.password} 
                className='outline-none border-b-2 border-blue-800 bg-sky-300 pl-2 py-1'
                onChange={(e) => onChangePasswordHandler(e)}
                onDoubleClick={() => {
                    navigator.clipboard.readText()
                    .then((copiedText) => {
                        setCopiedText('')
                        setloginData({...loginData, password: copiedText})
                    })
                }}/>
            </div>
            <div className='flex justify-center mt-4'>
                <button className='py-2 px-8 bg-green-500 hover:text-white' type="button" onClick={loginHandler}>Login</button>
            </div>
        </form>}
        <div>
            <p className='text-red-500'>{error}</p>
            {loading && <CustomAcmeLoader />}
        </div>
    </div>
    </>
  )
}

export default LoginForm