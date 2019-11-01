import filterReducer from '../../reducers/filterReducer'
import moment from 'moment'



// Test with default values

test('Should setup default filter Values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

// Test with sortBy Amount parameter

test('Should setup sortBy to Amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})
// Test with sortBy Date parameter

test('Should setup sortBy to Date', () => {
    const prevState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(prevState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

// Test with Set Text Filter parameter

test('Should setup a Text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Rent' })
    expect(state.text).toBe('Rent')
})

// Test with Set Start Date parameter

test('Should setup a Start Date filter', () => {
    const date = moment()
    const action = {
        type: 'SET_START_DATE',
        date
    }
    const state = filterReducer(undefined, action)
    expect(state.startDate).toEqual(date)
})
// Test with Set End Date parameter

test('Should setup a End Date filter', () => {
    const date = moment()
    const action = {
        type: 'SET_END_DATE',
        date
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(date)
})