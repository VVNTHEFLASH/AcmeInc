import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomersListCard from './CustomersListCard'

// const CustomersData = [
//   {
//     name: "Jenny Wilson",
//     email: "w.lawson@examble.com",
//     spends: 11234,
//     city: "Austin",
//     profile_picture: ""
//   },
  
//   {
//     name: "Devon Lane",
//     email: "dat.roberts@examble.com",
//     spends: 11159,
//     city: "New York",
//     profile_picture: ""
//   },
  
//   {
//     name: "Jane Cooper",
//     email: "jgraham@examble.com",
//     spends: 10483,
//     city: "Toledo",
//     profile_picture: ""
//   },
  
//   {
//     name: "Dianne Russell",
//     email: "curtis.d@examble.com",
//     spends: 9084,
//     city: "Napervile",
//     profile_picture: ""
//   }
// ]
const RecentCustomers = ({ data }: any) => {
    const nav = useNavigate()
  const seeAllTransactionHandler = () => {
    nav('customers', { state: { data: CustomersData}})
  }
  const CustomersData = data.map((item: any) => {
    const sample = {
      name: `${item.first_name ?? "NA"} ${item.last_name ?? "NA"}`,
      email: item.email,
      spends: item.spends,
      city: item.city,
      profile_picture: item.avatar
    }
    return sample
  })

  const FilteredData = CustomersData.filter((item: any, index: number) => index > 1 && index < 6 && item )
  return (
    <>
      <div className='h-fit m-6'>
        <div className=''>
          <p className='font-bold'>Recent Customers</p>
          <p className='text-gray-300'>We always loved to serve our customers!</p>
        </div>
        <div>
          {/* List */}
          {FilteredData.map((item: any, index: number) => <CustomersListCard data={item} key={index} index={index} />)}
        </div>
        <div>
          <div className='cursor-pointer flex items-center text-gray-500' onClick={seeAllTransactionHandler}>
            <p className='mr-2'>See All Customers</p>
            <i className='fa-solid fa-chevron-right'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentCustomers