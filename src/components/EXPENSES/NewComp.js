import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./../filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const NewComp = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const addYearFilter = (value) => {
    setFilterYear(value);
  };

  const dataArray = props.items.filter(
    (item) => { return item.date.getFullYear().toString() === filterYear}
   
  );
  console.log(dataArray)

  return (
    <div>
     

      <Card>
      <ExpenseFilter selectValue={filterYear} setYearFilter={addYearFilter} />
        <ExpensesChart expenses={dataArray}/>
        <ExpensesList items={dataArray} />
      </Card>
    </div>
  );
};

export default NewComp;
