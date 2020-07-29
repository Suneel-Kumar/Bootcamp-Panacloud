const AddTransactions = transaction => {
    return {
        type : 'ADD_TRANSACTION',
        payload : transaction
    }
}

const deleteTransaction = (index) => {
    return{
        type : 'DELETE_TRANSACTION',
        payload : index
    }
}

export{
    AddTransactions,
    deleteTransaction
}