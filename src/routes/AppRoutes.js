import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'

const AppRoutes = () => {
    return (
        <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="/edit/:id" component={EditExpensePage} />
            <Route exact path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRoutes
