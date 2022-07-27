import React from 'react'
import './add-expense.css'
import TopFold from '../../components/Topfold'
import AddForm from '../../components/AddForm'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <TopFold />
      <AddForm />
    </div>
  )
}

export default AddExpense