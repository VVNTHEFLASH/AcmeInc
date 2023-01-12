import { Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BaseURL } from "../../../../secret";

interface Props {
  showModal: boolean,
  setShowModal: any,
}
const IData = {
  email: '',
  username: '',
  password: ''
}


export default function SignUpModal({ showModal, setShowModal }: Props) {
  const [data, setData] = React.useState(IData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value })
  }
  const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, username: e.target.value })
  }
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value })
  }

  const SignUp = async () => {
    setLoading(true)
    if(data.email == "" || data.password == "" || data.username == ""){
      setLoading(false)
      return setError("Please don't leave any field empty")
    }
    await ValidateEmail(data.email)
  }

  const onSignUp = async () => {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "name": data.username,
        "email": data.email,
        "password": data.password,
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      
      fetch(`${BaseURL}userAccount/new`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result?.email == "Email already exists" ){
            return setError("Email already exists")
          }
          alert("Account Created Successfully")
          setShowModal(false)
        })
        .catch(error => console.log('error', error))
        .finally(() => {
          setLoading(false)
          setData(IData)
          setError('')
        })
      }

      async function ValidateEmail(inputText: string) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
        {
          await onSignUp()
          return true;
        }
        else
        {
          setError("You have entered an invalid email address!");
          setLoading(false)
          return false;
        }
      }
      
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Sign Up
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label>Email</label>
                  <TextInput onChange={(e) => setEmail(e)} value={data.email} className={'my-2 w-96'} />
                  <label>Username</label>
                  <TextInput className="w-96 my-2"  onChange={(e) => setUserName(e)}  value={data.username} />
                  <label>Password</label>
                  <TextInput className="w-96 my-2" onChange={(e) => setPassword(e)}   value={data.password} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {loading && <Spinner />}
                  {error && <p className="font-source-sans-pro text-lg">{error}</p>}
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={SignUp}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}