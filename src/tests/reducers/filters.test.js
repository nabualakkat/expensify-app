import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const state = filtersReducer({sortBy: 'amount'}, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'text'})
    expect(state.text).toBe('text')
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type:'SET_START_DATE', startDate: 50})
    expect(state.startDate).toBe(50)

})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type:'SET_END_DATE', endDate: -10000})
    expect(state.endDate).toBe(-10000)
})