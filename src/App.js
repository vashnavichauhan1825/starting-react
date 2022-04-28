
import React, {useState} from "react";
import "./App.css";
import NewComp from "./components/EXPENSES/NewComp";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

const App=()=> {
  const dummyArray =[
    {
      title:'kindle',
      amount:'17,000',
      date:new Date(2022, 7, 14),
      id:1,
    },
    {
      title:'peach milk',
      amount:'400',
      date:new Date(2021, 7, 1),
      id:2,
    },
    {
      title:'gadgets',
      amount:'7,000',
      date:new Date(2020, 9, 14),
      id:3,
    },
    {
      title:'hoodies',
      amount:'1000',
      date:new Date(2021, 10, 14),
      id:4,
    }
  ]

 const [expenses , setExpenses]= useState(dummyArray)

  

  const addExpenseHandler = (item )=>{
   setExpenses((expense)=>{
    return [item,...expense]
   })
   console.log(expenses)
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <NewComp items={expenses} />

    </div>
  );
}

export default App;
