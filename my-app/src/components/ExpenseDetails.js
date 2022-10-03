function ExpenseDetails(props) {
    const title = props.title;
    const amount = props.amount;

    return(
        <div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export default ExpenseDetails;