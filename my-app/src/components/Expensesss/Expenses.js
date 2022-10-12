import React, { useCallback, useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpensesList";

const  Expenses = (props) => {
  const [filteredYear, setFiteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFiteredYear(selectedYear);
  }

  const FilterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />
      <ExpensesChart expense={FilterdExpenses}/>
      <ExpenseList items={FilterdExpenses}/>
      
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        id={props.items[0].id}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        id={props.items[1].id}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        id={props.items[2].id}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        id={props.items[3].id}
      /> */}
    </Card>
  );
}

export default Expenses;
