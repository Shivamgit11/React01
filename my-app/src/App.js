import ExpenseItem from "./components/Expenseitem";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 150,
      date: new Date(2020, 7, 14),
      place: "patna",
    },
    { id: "e2", title: "New TV", amount: 78000, date: new Date(2021, 2, 12), place: "Kolkata", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 22500,
      date: new Date(2021, 2, 28),
      place: "Maharashtra",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 5000,
      date: new Date(2021, 5, 12),
      place: "Bangluru",
    },
  ];

  return (
    <div>
      <h2>lets get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} place={expenses[0].place}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} place={expenses[1].place}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} place={expenses[2].place}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} place={expenses[3].place}></ExpenseItem>
      
    </div>
  );
}

export default App;
