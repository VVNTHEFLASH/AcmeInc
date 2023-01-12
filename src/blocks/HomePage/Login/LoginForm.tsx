import React, { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseURL } from '../../../../secret';
import BasicSpinner from '../../../components/Loaders/BasicSpinner';
import CustomAcmeLoader from '../../../components/Loaders/CustomAcmeLoader';

const initialState = {
    email: '',
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
        if(loginData.email.length < 6){
            return setError("email should have minimum of 5 letters")
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
              "email": loginData.email,
              "password": loginData.password
            });
            
            var requestOptions = {
              method: 'POST',
              headers,
              body,
            };
            const response = await fetch(`${BaseURL}login`, requestOptions)
            const responseJson = await response.json();
            console.log(responseJson);
            if(responseJson?.email == "Email not found"){
                return setError(responseJson.email)
            }
            else if(responseJson?.password == "Incorrect password"){
                return setError(responseJson.password)
            }
            else {
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

    const onChangeemailHandler = (e: changeEvent) => {
        setloginData({ ...loginData, email: e.target.value })
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
                <label>email</label>
                <input 
                type="text" name="" id="email"
                value={loginData.email} 
                className='border-b-2 outline-none border-blue-800 bg-sky-300 pl-2 py-1'
                onChange={(e) => onChangeemailHandler(e)}
                onDoubleClick={() => {
                    navigator.clipboard.readText()
                    .then((copiedText) => {
                        setCopiedText('')
                        setloginData({...loginData, email: copiedText})
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