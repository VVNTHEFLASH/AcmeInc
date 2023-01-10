import React from 'react'
import CustomersListCard from './CustomersListCard'

const CustomersData = [
  {
    name: "Jenny Wilson",
    email: "w.lawson@examble.com",
    spends: 11234,
    city: "Austin",
    profile_picture: ""
  },
  
  {
    name: "Devon Lane",
    email: "dat.roberts@examble.com",
    spends: 11159,
    city: "New York",
    profile_picture: ""
  },
  
  {
    name: "Jane Cooper",
    email: "jgraham@examble.com",
    spends: 10483,
    city: "Toledo",
    profile_picture: ""
  },
  
  {
    name: "Dianne Russell",
    email: "curtis.d@examble.com",
    spends: 9084,
    city: "Napervile",
    profile_picture: ""
  }
]
const RecentCustomers = () => {

  return (
    <>
      <div className='h-fit m-6'>
        <div className=''>
          <p className='font-bold'>Recent Customers</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit ametis</p>
        </div>
        <div>
          {/* List */}
          {CustomersData.map((item, index) => <CustomersListCard data={item} index={index} />)}
        </div>
        <div>
          <div className='flex items-center text-gray-500'>
            <p className='mr-2'>See All Customers</p>
            <i className='fa-solid fa-chevron-right'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentCustomers