import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTransactions } from './Redux/Action';

function AddTransaction() {
    const [text, settext] = useState('');
    const [amount, setamount] = useState('');
    let Income;

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();
        if (amount.indexOf('+') !== undefined) {
            Income = amount
        }
        console.log(Income)
        const obj = {
            text,
            amount
        }
        dispatch(AddTransactions(obj))
        settext('');
        setamount('');
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" onChange={e => settext(e.target.value)} value={text} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" onChange={e => setamount(e.target.value)} value={amount} placeholder="Enter amount..." />
                </div>
                <button className="btn" type="submit">Add transaction</button>
            </form>
        </Fragment>
    )
}

export default AddTransaction;