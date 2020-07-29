import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const IncomeExpense = ({getBalance}) => {

  const state = useSelector(state => state);

  useEffect(() => {
    Balance();
  }, [state])
  const getIncome = () => {
    let Income = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i].amount > 0) {
        Income += (+(state[i].amount))
      }
    }
    return Income;
  }

  const getExpense = () => {
    let Expense = 0;
    for (let E = 0; E < state.length; E++) {
      if (state[E].amount < 0) {
        Expense -= state[E].amount
      }
    }
    return Expense;
  }

  const Balance = () => {
    let balance = getIncome() - +(getExpense());
    getBalance(balance);
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">{getIncome()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus"> {getExpense()}</p>
      </div>
    </div>
  )
};

export default IncomeExpense;