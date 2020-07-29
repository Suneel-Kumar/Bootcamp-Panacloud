import React, { useState } from 'react';
import './App.css';
import Header from './Expense_Tracker/Header';
import Balance from './Expense_Tracker/Balance'
import IncomeExpense from './Expense_Tracker/IncomeExpense';
import TransactionList from './Expense_Tracker/TransactionList';
import AddTransaction from './Expense_Tracker/AddTransaction';

const App = () => {
  const [bal, setbal] = useState('')

  const getBalance = data => {
    setbal(data);
  }
  
  return (
    <div>
      <Header />
      <div className="container">
        <Balance ba={bal}/>
        <IncomeExpense getBalance={getBalance}/>
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;