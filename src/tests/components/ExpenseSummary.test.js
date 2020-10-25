import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test('should render ExpenseSummary with plural expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})