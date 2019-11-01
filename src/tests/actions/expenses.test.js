import { addExpense, removeExpense, editExpense } from '../../actions/expenses'


// Remove Expense Test
test('should generate  remove expense object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
}) 

// Edit Expense Test
test('should generate edit expense object', () => {
    const action = editExpense('123abc', { amount: 12500 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 12500
        }
    })
})

// Add Expense Test with custom values
test('should generate add expense object with custom value', () => {
    const expenseData = {
        title: 'Rent',
        note: 'Last month rent',
        amount: 1000,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

// Add Expense Test with default values
test('should generate add expense object with default value', () => {
    const expenseData = {
        title: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})