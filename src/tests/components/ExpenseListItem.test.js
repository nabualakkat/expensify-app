import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'



test('should render Expense List Item', () => {
    const wrapper = shallow(<ExpenseListItem id = '1' description = 'Water' amount={300000} createdAt={231412341243}/>)
    expect(wrapper).toMatchSnapshot()
})