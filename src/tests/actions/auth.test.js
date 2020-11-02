import {login, logout} from '../../actions/auth'

test('should setup login action object', () => {
    const action = login('test-abc')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'test-abc'
    })
})

test('should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})