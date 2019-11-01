import * as filters from '../../actions/filters'
import moment from 'moment'


// Test for Set Start Date filter

test('Should generate set-start-date action object', () => {
    const date = moment()
    const action = filters.setStartDate(date)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date 
    })
})


// Test for Set End Date filter

test('Should generate set-end-date action object', () => {
    const date = moment(0)
    const action = filters.setEndDate(date)
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date
    })
})

// Test for Set Text filter

test('Should generate set-text-filter action object', () => {
    const action = filters.setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

// Test for Set Text filter with default

test('Should generate set-text-filter action object with default values', () => {
    const action = filters.setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


// Test for SortBy amount 

test('Should generate set-sort-by-amount action object', () => {
    const action = filters.sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

// Test for SortBy date 

test('Should generate set-sort-by-amount action object', () => {
    const action = filters.sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})