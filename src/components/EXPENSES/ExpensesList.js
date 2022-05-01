import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'

const ExpensesList = (props) => {
   
   if(props.items.length === 0){
       return  <img className='notFound__box' src='https://media.giphy.com/media/QTb0bukuuPe0GAvmVD/giphy.gif'/>;
   }

   
  return (
    <div  className='expense__box'>
 {
   props.items.map(item => <ExpenseItem
        title={item.title} amount={item.amount} date={item.date} key={item.id} ></ExpenseItem> )
 }
</div>
  )
}

export default ExpensesList