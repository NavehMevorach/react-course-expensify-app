import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses  from '../fixtures/expenses'


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