import React,{useState} from 'react'
import Card from './../UI/Card'
import './Expense.css'
import ExpenseDate from './ExpenseDate'


const ExpenseItem = (props) => {

return (
  <Card className='expense_cont'>
      <div className='date_cont'>
         <ExpenseDate date={props.date} />
      </div>
          <h1>{props.title}</h1>
          <span className='mrp_cont'>₹ {props.amount}</span>
  </Card>
  )
}

export default ExpenseItem