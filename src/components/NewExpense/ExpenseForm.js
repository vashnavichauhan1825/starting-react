import React, { useState } from 'react'
import './expenseform.css'

const ExpenseForm = () => {
    const [addTitle , setAddTitle] = useState('');
    const [addExpense , setAddExpense]= useState('');
    const [addDate , setAddDate] = useState('');

  const textHandler=(event)=>{
    setAddTitle(event.target.value);
  }

  const dateHandler=(event)=>{
    setAddDate(event.target.value);
     }

    const expenseHandler=(event)=>{
     setAddExpense(event.target.value)
    } 
   
    const submitHandler =(event)=>{
       event.preventDefault();
       const dataStored ={
           title:addTitle,
           expense:addExpense,
           date:new Date(addDate),
       }
       console.log(dataStored);
       setAddDate('')
       setAddExpense('');
       setAddTitle('');
    }

  return (
   <form className='form__box' onSubmit={submitHandler}>
       <div>
           <label>Title : </label>
           <input type='text' value={addTitle} onChange={textHandler}/>
       </div>
       <div>
           <label>Expense : </label>
           <input
            type='number'
             min='1'
             step='1'
             value={addExpense}
             onChange={expenseHandler}

             />
       </div>
       <div>
           <label>Date : </label>
           <input type='date'  min='2019-11-20' max='2023-12-31' value={addDate}  onChange={dateHandler} />
       </div>
       <button  className='submit__btn' type='submit'>ADD EXPENSE</button>
   </form>
  )
}

export default ExpenseForm;