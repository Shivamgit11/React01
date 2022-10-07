import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';



const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    
    const [amount, setAmount] = useState(props.amount)

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    const ClickAmount = () => {
        setAmount('50000');
        console.log(amount);
    }

    // const Delteedd = () => {
    
    //     console.log('Deleted');
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <button onClick={ClickAmount}>Change amount</button>
            
        </Card>
    );
}

export default ExpenseItem;
