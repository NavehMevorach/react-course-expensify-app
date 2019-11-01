import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [
    {
        id: 1,
        title: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: 2,
        title: 'Rent',
        note: '',
        amount: 1000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        title: 'Credit Card',
        note: '',
        amount: 550,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]


// Text filter Test
test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})

// Start Date Filter Test

test('Should filter by StartDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

// End Date Filter Test

test('Should filter by EndDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

//  Sort by Date Test

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

//  Sort by Amount Test

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})