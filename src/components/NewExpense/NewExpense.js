import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./formContainer.css";
import "./expenseform.css";

const NewExpense = (props) => {
  const [btnValue, setBtnValue] = useState(false);

  const saveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
    };
    props.onAddExpense(expenseData);
  };
  const addNewExpenseHandler = () => {
    setBtnValue(true);
  };

  const removeExpenseClickHandler = () => {
    setBtnValue(false);
  };
  return (
    <div className="form__cont">
      {!btnValue && (
        <button className="submit__btn" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {btnValue && (
        <ExpenseForm
          onSaveData={saveExpenseHandler}
          onCancel={removeExpenseClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
