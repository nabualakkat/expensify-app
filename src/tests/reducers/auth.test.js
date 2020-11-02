import authReducer from '../../reducers/auth'

test('should add uid to state', () => {
    const action = {
        type: 'LOGIN',
        uid: 'test-123'
    }
    const state = authReducer({},action)
    expect(state).toEqual({uid: 'test-123'})
})

test('should remove uid from state', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'test-123'}, action)
    expect(state).toEqual({})
})