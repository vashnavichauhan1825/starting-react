import React from 'react'
import ExpenseForm from './ExpenseForm'
import './formContainer.css'

const NewExpense = (props) => {
  const  saveExpenseHandler=(data)=>{
    const expenseData ={
        ...data
    }
   props.onAddExpense(expenseData)
  }
  return (
      <div className='form__cont'>
     <ExpenseForm onSaveData={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense