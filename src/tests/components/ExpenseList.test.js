import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesList } from '../../components/ExpensesList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expense', () => {
    const wrapper = shallow(<ExpensesList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})


