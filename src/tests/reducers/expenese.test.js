import expenseReducer from '../../reducers/expensesReducer'
import  expenses  from '../fixtures/expenses'

// Test with default value
test('Should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

// Test Add expense

test('Should Add expense to the state', () => {
  const expense = {
    id: 109,
    title: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

// Test Remove expense

test('Should remove expense from state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses[1], expenses[2])
})

test('Should --Not-- remove expense from state without id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// Test Edit expense
test('Should edit expense by the id', () => {
  const amount = 120000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1],
    updates: {
      amount
    }
  }
  const state = expenseReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})


test('Should --Not-- edit expense without id', () => {
    const amount = 120000
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        amount
      }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
  })