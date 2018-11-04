import React from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Index'
import Profile from './Pages/Profile'
import Callback from './Pages/Callback'
import Navigation from './Layout/Navigation'
import Auth from './Auth'
import history from './history'

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export default class Routes extends React.Component {
  state = {
    profile: {}
  }

  componentWillMount() {
    const { userProfile, getProfile } = auth

    if (!userProfile) {
      try {
        getProfile((err, profile) => {
          this.setState({ profile })
        })
      } catch (e) {}
    } else {
      this.setState({ profile: userProfile })
    }
  }

  render () {
    return (
      <Router history={history}>
        <div className="text-black">
          <Navigation auth={auth} profile={this.state.profile} />

          <main className="min-h-screen pt-16 bg-grey-light">
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