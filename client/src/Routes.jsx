import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Index'
import Profile from './Pages/Profile'
import Callback from './Pages/Callback'
import Auth from './Pages/Auth'
import Navigation from './Layout/Navigation'
import history from './history'

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Navigation auth={auth} />

          <main className="pt-16">
            <Route
              exact
              path="/"
              render={props =>
                <Home auth={auth} {...props} />
              }
            />
            <Route
              path="/profile"
              render={props =>
                !auth.isAuthenticated()
                  ? <Redirect to="/home" />
                  : <Profile auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
          </main>
        </div>
      </Router>
    )
  }
}