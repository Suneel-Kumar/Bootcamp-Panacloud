const INITIAL_STATE = [
    { text: "Bills", amount: "-1500" },
    { text: "Cloth", amount: "5000" }
];

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [...state, action.payload]
        case 'DELETE_TRANSACTION':
            return state.filter((transaction) => transaction !== action.payload)
        default:
            return state;
    }
};

export default Reducer;