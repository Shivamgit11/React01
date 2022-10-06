import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: "long" });
  const Day = props.date.toLocaleString('en-US', { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__year'>{Day}</div>
    <div className='expense-date__day'>{Year}</div>
    </div>
  );
}

export default ExpenseDate;
