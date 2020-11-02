
import React from 'react'
import { Router,Switch, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute.js'
// <Route path={['/dashboard', 'create', '/edit/:id']} component={Header}/>

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}/>     
                <PrivateRoute path='/create' component={AddExpensePage}/> 
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter