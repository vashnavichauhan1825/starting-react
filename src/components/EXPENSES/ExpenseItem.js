import React,{useState} from 'react'
import Card from './../UI/Card'
import './Expense.css'
import ExpenseDate from './ExpenseDate'


const ExpenseItem = (props) => {

 const [ title , setTitle ] = useState(props.title);
 console.log('is state render')

const clickHandler =()=>{
   setTitle('vashnavi')
   console.log(title);
}
return (
  <Card className='expense_cont'>
      <div className='date_cont'>
         <ExpenseDate date={props.date} />
      </div>
          <h1>{title}</h1>
          <span className='mrp_cont'>₹ {props.amount}</span>
          <button onClick={clickHandler}>click me !</button>
  </Card>
  )
}

export default ExpenseItem