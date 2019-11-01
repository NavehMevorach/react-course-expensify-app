import uuid from 'uuid'


// ------- Expenses Actions ---------

// Add expense
export const addExpense = ({
  title = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    title,
    note,
    amount,
    createdAt
  }
})

// Remove expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// Edit expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
