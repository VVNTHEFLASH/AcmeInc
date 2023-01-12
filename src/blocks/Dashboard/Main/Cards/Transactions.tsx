import React from 'react'
import TransactionListCard from './TransactionListCard';
import { useNavigate } from 'react-router-dom';

// const TransactionsData = [
//   {
//     status: "Completed",
//     details: {
//       payment_type: "Visa card",
//       payment_no: "**** 4831"
//     },
//     vendor: {
//       name: "Amazon",
//       price: 182.94,
//       currency: "$",
//       date: "Jan 17, 2022"
//     }
//   },
//   {
//     status: "Completed",
//     details: {
//       payment_type: "Mastercard",
//       payment_no: "**** 6442"
//     },
//     vendor: {
//       name: "Facebook",
//       price: 99.00,
//       currency: "$",
//       date: "Jan 17, 2022"
//     }
//   },
//   {
//     status: "Pending",
//     details: {
//       payment_type: "Account",
//       payment_no: "****882"
//     },
//     vendor: {
//       name: "Netflix",
//       price: 249.94,
//       currency: "$",
//       date: "Jan 17, 2022"
//     }
//   },
//   {
//     status: "Canceled",
//     details: {
//       payment_type: "Amex card",
//       payment_no: "**** 5666"
//     },
//     vendor: {
//       name: "Amazon Prime",
//       price: 199.24,
//       currency: "$",
//       date: "Jan 17, 2022"
//     }
//   },
// ]
const Transactions = ({ data }: any) => {
  console.log(data, "TRa")
  const TransactionsData = data.map((item: any, index: number) => {
    const sample = {
          status: item.t_status,
          details: {
            payment_type: item.card_type,
            payment_no: item.card_number
          },
          vendor: {
            name: item.vendor_name,
            price: item.t_amount,
            currency: "$",
            date: `${data.length-index} Jan 2022`
          }
      }
      return sample
  })
  const filteredData = TransactionsData.filter((data: any, index: number) => index < 4 && data)

  const navigate = useNavigate()
  const setAllTransactionHandler = () => {
    navigate('transactions', { state: { data: TransactionsData } })
  }



  return (
    <div className='h-fit font-source-sans-pro'>
      <div className='flex justify-between pt-8 pl-8 pr-8'>
        <div className='flex justify-start items-center font-bold'>
          <p>Transactions</p>
        </div>
        <div className='cursor-pointer flex justify-evenly items-center text-blue-800'>
          <p className='' onClick={setAllTransactionHandler}>See all Transactions</p>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className='pl-8 pt-2'>
        <p className='text-[#A3A3A9]'>latest transaction details updated!</p>
      </div>
      <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 scrollbar-thumb-rounded-full'>
        {/* List */}
        {filteredData.map((item: any, index: number) => <TransactionListCard data={item} index={index} key={item.details.payment_no} />)}
      </div>
    </div>
  )
}

export default Transactions