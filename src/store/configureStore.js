import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expensesReducer'
import filterReducer from '../reducers/filterReducer'

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}
