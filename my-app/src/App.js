import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpensese";
import Expenses from "./components/Expensesss/Expenses";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = ()  => {
  const [expensesData, setExpensesData] = useState(expenses);
  

  const addExpenseHandler = expense => {
    console.log("In app js");
    console.log(expense); 
    //expenses.push(expense);
    setExpensesData(previousstate => {return [expense, ...previousstate]})
  };
  console.log(expenses);
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, 'Let\'s get started'),
  //   React.createElement(Expenses, {items: expenses})
  //   );
      
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
