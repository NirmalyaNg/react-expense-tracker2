import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpenseMode, setAddExpenseMode] = useState(false);

  const addExpenseModeHandler = () => {
    setAddExpenseMode(true);
  };

  const stopAddExpenseModeHandler = () => {
    setAddExpenseMode(false);
  };

  return (
    <div className="new-expense">
      {!addExpenseMode && (
        <button type="button" onClick={addExpenseModeHandler}>
          Add New Expense
        </button>
      )}
      {addExpenseMode && (
        <ExpenseForm
          onAddExpense={props.onAddExpense}
          onStopAddExpense={stopAddExpenseModeHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
