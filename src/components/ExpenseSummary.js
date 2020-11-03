import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import {Link} from 'react-router-dom'
import selectExpensesTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'

export const ExpenseSummary = (props) => {
    const expenseCount = props.expenses.length
    const expensesTotal = selectExpensesTotal(props.expenses)
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseCount===1?"expense":"expenses"} totalling <span>{numeral(expensesTotal / 100).format("$0,0.00")}</span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)