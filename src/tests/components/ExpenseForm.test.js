import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm.js'
import expenses from '../fixtures/expenses'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

test('should render ExpenseForm correctly',  () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value: 'New Description'}
    })
    expect(wrapper.state('description')).toBe('New Description')
})

test('should set note on text area change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {value: 'New Note'}
    })
    expect(wrapper.state('note')).toBe('New Note')
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value: '23.50'} //valid amount
    })
    expect(wrapper.state('amount')).toBe('23.50')
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value: '12.122'} //invalid amount
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt
    })

})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set on focus change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused: true})
    expect(wrapper.state('calendarFocused')).toEqual(true)
})