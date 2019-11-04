import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot()
})