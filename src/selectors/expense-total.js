export default (expenses) => {
    const amountArray = expenses.map((expense) => expense.amount)
    return amountArray.reduce((a,b) => a + b, 0)
}