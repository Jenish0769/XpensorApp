import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchExpense } from '../../redux/actions/expenses'
import './topfold.css'

const TopFold = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const handleQuery = (e) => {
    setQuery(e.target.value)
    dispatch(searchExpense(e.target.value))
  }
  return (
    <div className='topfold'>
      {window.location.pathname === '/'
        ?
        <div className='home-topfold'>
          <div className='searchbar'>
            <i className="fi fi-rr-search"></i>
            <input
              placeholder='search for expenses'
              value={query}
              onChange={(e) => handleQuery(e)} />
          </div>
          <Link to='/add-expense'>
            <div className='add-button'>
              <i className="fi fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
        :
        <div className='add-topfold'>
          <Link to='/'>
            <div className='add-topfold-button'>
              <i class="fi fi-rr-angle-left"></i>
              <label>back</label>
            </div>
          </Link>
          <Link to='/'>
            <div className='add-topfold-button'>
              <i class="fi fi-rr-cross-circle"></i>
              <label>cancel</label>
            </div>
          </Link>
        </div>
      }

    </div>
  )
}

export default TopFold