import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'

const App = () => {
  return (
    <Router>
      <h1>Hello World</h1>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route exact path='/' component={Nav} />
        <Route render={() => <h1>You Have Come to the Wrong Place </h1>}/>
      </Switch>
    </Router>
  )
}

export default App
