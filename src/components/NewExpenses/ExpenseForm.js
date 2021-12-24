import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {


    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date())
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }


    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date)

    }
    const formSubmitHandler = e => {
        e.preventDefault();
        setTitle('')
        setDate('')
        setAmount('')
        props.onNewExpenseData(expenseData)
        props.onCancel()
    }
    const cancelEventHandler = () => {
        props.onCancel();
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelEventHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;