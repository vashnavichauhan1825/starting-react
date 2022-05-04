import React from 'react'
import './expenseFilter.css'

const ExpenseFilter = (props) => {

    const fiterYearHandler = event =>{
        props.setYearFilter(event.target.value);
    }
  return (
    <div className='expense__filter'>
        <h1>filter</h1>
        <select value={props.selectValue} onChange={fiterYearHandler}>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        </select>
    </div>
  )
}

export default ExpenseFilter