import React from 'react'
import { connect } from 'react-redux'
import ExpensesListItem from './ExpensesListItem'
import selectExpenses from '../selectors/expenses'


export const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map(expense => <ExpensesListItem key={expense.id} {...expense} />)}
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList)

