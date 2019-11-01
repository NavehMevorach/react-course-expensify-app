
// ------- Filter Actions ---------


// set Text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  })
  // Sort by Amount
  export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  })
  
  // Sort by Date
  export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  })
  
  // Set start date
  export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
  })
  
  // Set end date
  export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
  })
  