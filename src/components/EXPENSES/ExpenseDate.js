import React from 'react'
import './expensedate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month:'long'});
    const day =  props.date.toLocaleString('en-US', { day:'2-digit'})
    const year = props.date.getFullYear()
  
  return (
   <>
         <div className='bold__txt'>{month}</div>
         <div className='white__txt'>{year}</div>
         <div className='bold__txt'>{day}</div>
   </>
  )
}

export default ExpenseDate;