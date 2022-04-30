import React, {useState} from 'react'
import Card from './../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './../filter/ExpenseFilter'
import ExpensesList from './ExpensesList'

const NewComp = (props) => {
 
  const [filterYear , setFilterYear]=useState('2021')

  const addYearFilter = value =>{
    setFilterYear(value);
  }
 
 const dataArray = props.items.filter(item => item.date.getFullYear().toString() === filterYear)


  return (
    <div>
    <ExpenseFilter selectValue={filterYear} setYearFilter={addYearFilter} />
    
    <Card className='expense__box'>
   <ExpensesList items={dataArray}/>
    </Card>
    </div>
  )
}

export default NewComp