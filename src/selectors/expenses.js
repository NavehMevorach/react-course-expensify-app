import moment from 'moment'

// Filter and Sort  Visible Expenses 
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true 
        const endStartMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.title.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endStartMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        } else {

        }
    })
}