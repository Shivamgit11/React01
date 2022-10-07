import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';



const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('clicked!!!')
    }

    const Delteedd = () => {
        console.log('Deleted');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rs{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <button onClick={Delteedd}>Delete Expense</button>

        </Card>
    );
}

export default ExpenseItem;
