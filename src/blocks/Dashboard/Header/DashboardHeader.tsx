import React, { Dispatch } from 'react';
import AcmeHeaderLogo from "../../../assets/acme-inc-tp.png";
import ProfileImage from "../../../assets/profile.png";

interface Props {
    isDrawerOpen: Dispatch<React.SetStateAction<boolean>>
}

const DashboardHeader = ({ isDrawerOpen }: Props) => {

    const [searchInput, setSearchInput] = React.useState('')

    const resetSearchInput = () => {
        setSearchInput('')
    }

    function onChangeSearchInputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setSearchInput(e.target.value)
    }

  return (
    <>
        <div className='grid grid-cols-header-262 p-2'>
            <div className='flex justify-start'>
                <img src={AcmeHeaderLogo} alt="Logo" className='h-8'/>
            </div>
            <div className='flex border-2 rounded-lg items-center p-1 justify-between'>
                <i className="fa-solid fa-magnifying-glass ml-2 text-gray-300"></i>
                <input 
                type="text" name="searchInput" id="searchInput"
                className='text-sm ml-2 w-full border-none'
                placeholder='Type to search' value={searchInput}
                onChange={(e) => onChangeSearchInputHandler(e)}  />
                {searchInput && <i className="fa-solid fa-x ml-2 mr-2 flex text-blue-600 cursor-pointer" onClick={resetSearchInput}></i>}
            </div>
            <div className='flex justify-end items-center'>
                    <i className="fa-regular fa-envelope mx-3"></i>
                    <i className="fa-regular fa-bell mx-3"></i>
                    <div onClick={() => {
                        // isDrawerOpen(true)
                    }}>
                        <img src={ProfileImage} alt="profileImage" className='h-8 w-8 mr-10' />
                    </div>
            </div>
        </div>
    </>
  )
}

export default DashboardHeader