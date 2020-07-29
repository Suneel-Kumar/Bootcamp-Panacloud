import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTransaction } from './Redux/Action'

const TransactionList = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch()

    const DeleteTransaction = (obj) => {
        dispatch(deleteTransaction(obj));
    }

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {store.map((item, index) => {
                    return (
                        <li className="minus" key={index}>
                            {item.text} <span>{item.amount}</span><button className="delete-btn" onClick={() => DeleteTransaction(item)}>x</button>
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default TransactionList
