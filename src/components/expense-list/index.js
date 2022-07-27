import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import './expense-list.css'
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses)
  const filteredList = list.filter(item => item.title.includes(query))

  useEffect(() => {
    console.log("list : ", list);
  }, [list])

  const notifySuccess = () => { toast.success("Expense Deleted Successfully") }
  return (
    <div className='expense-list'>
      <ToastContainer
        position='bottom-left'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        <>
          <p>test</p>
          {filteredList.map((item) => <Card item={item} notifySuccess={notifySuccess} />)}
        </>
      ) : (
        <div className='empty-state'>
          <img
            src={require('../../assets/images/empty.png')}
            alt=""
            className='empty-image'
          />
          <label>Expense list is empty</label>
        </div>)}
    </div>

  )
}

export default ExpenseList