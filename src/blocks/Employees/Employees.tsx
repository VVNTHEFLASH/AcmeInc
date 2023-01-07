import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgeIdentifier from '../../components/HelperComponents/AgeIdentifier';
import GenderIdentifier from '../../components/HelperComponents/GenderIdentifier';
import GrowingSpinner from '../../components/Loaders/GrowingSpinner';

const initailLimit = 7

const Employees = () => {

    const navigate = useNavigate()

    const onClickBackHandler = () => {
        navigate(-1)
    }
    const initialData: any[] = []
    const [userdata, setUserData] = useState(initialData)
    const [Error, setError] = useState('')
    const [Loading, setLoading] = useState(true)

    const [pageNo, setpageNo] = useState(0);
    const [message, setMessage] = useState('');
    const [limit, setLimit] = useState(initailLimit)
    const getUser = async () => {
        // const getUserData = localStorage.getItem('getUser')
        // if(getUserData){
        //     setUserData(JSON.parse(getUserData))
        //     setError('')
        //     setLoading(false)
        // }
        // else{
        //     fetchUser(pageNo);
        // }
        await fetchUser(pageNo)
    }

    const fetchUser = async (pageNo: number) => {
        const skip = limit * pageNo;
        fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setUserData(result.users)
            setFilteredData(result.users)
            localStorage.setItem('getUser', JSON.stringify(result.users))
            setError('')
            setLoading(false)
            setMessage('Data Fetched Successfully')
            setTimeout(() => {
                setMessage('')
            }, 3000)
        }).catch(err => {
            console.log(err);
            setError("Failed to fetch user data")
            setLoading(false)
        })
    }

    useEffect(() => {
        getUser()
    }, [pageNo, limit])

    function onClickEditHandler(item: any): void {
        console.log(item)
    }

    const onClickNextHandler = () => {
        setpageNo(pageNo + 1)
    }

    const onClickPrevHandler = () => {
        setpageNo(pageNo - 1)
    }

    const paginationLimitSetHanlder = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(parseInt(e.target.value) > 100){
            return
        }
        else if(parseInt(e.target.value) < 1){
            return
        }
        else if(pageNo <= (Math.ceil(100/limit))){
            setpageNo(0)
            setLimit(parseInt(e.target.value))
        }
        else{
            setLimit(parseInt(e.target.value))
        }
    }
    const resetPaginationLimit = () => {
        setLimit(initailLimit)
    }

    const [filteredData, setFilteredData] = useState(userdata);

    const [gender, setGender] = useState('');

    const filterByGender = () => {
        if(gender === 'male'){
            const data = userdata.filter((item) => item.gender === gender)
            setFilteredData(data)
            setGender('female')
        }
        else if(gender === "female"){
            const data = userdata.filter((item) => item.gender === gender)
            setFilteredData(data)
            setGender('')
        }
        else{
            setFilteredData(userdata)
            setGender('male')
        }
    }

    const [employeesSortOrder, setEmployeesSortOrder] = useState("")
    const sortByEmployeeName = () => {
        if(employeesSortOrder == "AZ"){
            const data = filteredData.slice(0).sort((a, b) => a.firstName.localeCompare(b.firstName) )
            setFilteredData(data)
            setEmployeesSortOrder("ZA")
            console.log(employeesSortOrder)
        }
        else if(employeesSortOrder == "ZA"){
            const data = filteredData.slice(0).sort((a, b) => b.firstName.localeCompare(a.firstName))
            setFilteredData(data)
            console.log(employeesSortOrder)
            setEmployeesSortOrder("")
        }
        else{
            const data = filteredData
            setFilteredData(data)
            console.log(employeesSortOrder)
            setEmployeesSortOrder("AZ")
        }
    }

  return (
    <>
        <div className='flex justify-between bg-teal-900'>
        <div className='m-4'>
            <button onClick={onClickBackHandler} className='pt-4 text-white px-2 hover:underline'>Back</button>
        </div>
        <span className='text-center m-4 p-2 font-bold text-teal-200 text-3xl'>Acme Inc Employees</span>
        <div className='mr-4'>
            <label className='px-2 text-white'>Pagination Limit</label>
            <input type="number" name="" id="" className='border-b-2 mt-4 pt-2 text-xl text-right w-10' value={`${limit}`} onChange={(e) => paginationLimitSetHanlder(e)}/>
            <input type="button" value="Reset" className='px-2 text-white' onClick={resetPaginationLimit} />
        </div>
        </div>
        <hr />
        {Error && (
                <span className='flex justify-center m-2'>
                    <p className='animate-bounce'>{Error}</p>
                </span>
                )
            }
        {Loading && <GrowingSpinner />}
        {message && <span className='text-green-600 text-center flex justify-center animate-ping'>{message}</span>}
        {!Loading && <div className='flex justify-center mt-2'>
            <div className='inline-block rounded-lg border shadow-2xl px-8 pt-4 m-4'>
                <table className=''>
                    <thead className=''>
                        <tr className=''>
                            <th align='left' className=''>
                                <div>
                                    <span className='pr-4'>Employee</span>
                                    <i className="fa-solid fa-filter cursor-pointer hover:animate-pulse"  onClick={sortByEmployeeName}></i>
                                </div>
                            </th>
                            <th className='px-8 ' align='left'>
                                <div>
                                    <span className='pr-4'>Gender</span>
                                    <i className="fa-solid fa-filter cursor-pointer hover:animate-pulse"  onClick={filterByGender}></i>
                                </div>
                            </th>
                            <th className='px-8 ' align='left'>Age</th>
                            <th className='px-8 ' align='center'>University</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {filteredData.map((item) => (
                            <tr className='' key={item.id}>
                                <td className=''>
                                    <span className='flex mt-4'>
                                        <div className='bg-slate-200 rounded-full flex justify-center items-center h-12 w-12'>
                                            <img src={item.image} alt="Profile" className='' />
                                        </div>
                                        <div className='mx-2 mt-0 px-4'>
                                            <p>{`${item.firstName} ${item.lastName}`}</p>
                                            <a href={`http://${item.domain}`} className={'text-blue-400 hover:underline'}>{item.domain}</a>
                                        </div>
                                    </span>
                                </td>
                                <td className='' align='center'><GenderIdentifier gender={item.gender}/></td>
                                <td className='' align='center'><AgeIdentifier age={item.age}/></td>
                                <td className='pl-8' align='left'>
                                    <div className='flex'>
                                        <div className='2xl:w-96'>{item.university}</div>
                                        <div className='flex '>
                                            <span className=''>
                                                <i className="fa-solid fa-trash-can hover:animate-bounce hover:cursor-pointer"></i>
                                            </span>
                                            <span className='sm:ml-4' id={item.id} onClick={() => onClickEditHandler(item)}>
                                                <i className="fa-solid fa-edit hover:animate-pulse hover:cursor-pointer"></i>
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className='bt-2'>
                        <tr>
                            <th align='left'>
                                { pageNo > 0 && <div className='p-6' onClick={onClickPrevHandler}>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>}
                            </th>
                            <th align='right' className='p-6' colSpan={2}>
                                <div>
                                    <i>{pageNo+1} of {Math.ceil(100/limit)}</i>
                                </div>
                            </th>
                            <th align='right'>
                                { pageNo < (Math.ceil(100/limit) - 1) && <div className='p-6' onClick={onClickNextHandler}>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>}
    </>
  )
}

export default Employees