import React, {useState} from 'react'
import Card from './../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './../filter/ExpenseFilter'

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
    {
     
      dataArray.map(item => <ExpenseItem
      title={item.title} amount={item.amount} date={item.date} key={item.id} ></ExpenseItem> )
    }
    </Card>
    </div>
  )
}

export default NewComp