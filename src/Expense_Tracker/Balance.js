import React, { Fragment } from 'react'

const Balance = ({ba}) => {
    console.log(ba);
    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance">${ba}</h1>
        </Fragment>
    )
}

export default Balance