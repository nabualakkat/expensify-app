
import selectExpensesTotal from '../../selectors/expense-total'
import expenses from '../fixtures/expenses'

test('should correctly display sum of amounts', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(12095)
})

test('should correctly display amount of 1 expense', () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})

test('should correctly display 0', () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})

