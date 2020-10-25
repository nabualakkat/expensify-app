import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'

export const ExpenseSummary = (props) => {
    const expenseCount = props.expenses.length
    const expensesTotal = selectExpensesTotal(props.expenses)
    return (
        <div>
            <p>Viewing {expenseCount} {expenseCount===1?"expense":"expenses"} totalling {numeral(expensesTotal / 100).format("$0,0.00")}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)