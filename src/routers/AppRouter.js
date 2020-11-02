
import React from 'react'
import { Router,Switch, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import NotFoundPage from '../components/NotFoundPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute'
// <Route path={['/dashboard', 'create', '/edit/:id']} component={Header}/>

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}/>     
                <PrivateRoute path='/create' component={AddExpensePage}/> 
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter