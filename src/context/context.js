import React, {useReducer, createContext} from 'react'
import contextReducer from './contextReducer'
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{type: "Expense", date: "2021-09-18", amount: 20, category: "Clothes"},{type: "Income", date: "2021-09-18", amount: 30, category: "Salary"}]


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}