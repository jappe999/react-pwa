import React, { Component } from 'react'
import Menu from './Menu'
import logo from './logo.svg'

class Navigation extends Component {
  state = {
    menuIsOpen: false,
  }

  openMenu () {
    const { menuIsOpen } = this.state
    this.setState({
      menuIsOpen: !menuIsOpen
    })
  }

  login () {
    this.props.auth.login()
  }

  logout () {
    this.props.auth.logout()
  }

  render () {
    const { isAuthenticated } = this.props.auth
    const { profile } = this.props

    return (
      <div>
        <header className="h-16 w-full fixed bg-white shadow z-50">
          <nav className="flex justify-between items-center py-2 px-6">
            <div className="h-8 w-full flex justify-start items-center" onClick={() => this.openMenu()}>
              <i className="fa fa-bars text-grey-darker text-3xl"></i>
            </div>

            <div className="min-w-32 flex-grow flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-12" />
              <small className="text-grey whitespace-no-wrap">React Logo</small>
            </div>

            <div className="w-full flex justify-end">
              {isAuthenticated() &&
                <div className="flex items-center mr-2 text-grey-dark">
                  <img src={profile.picture} alt="profile" className="h-10 mr-2 rounded" />
                  {profile.name}
                </div>}

              {!isAuthenticated() &&
                <button className="mx-2" onClick={() => this.login()} title="Log in">
                  Log in
                </button>}
              
              {isAuthenticated() &&
                <button className="ml-2" onClick={() => this.logout()} title="Log out">
                  <i className="fa fa-power-off"></i>
                </button>}
            </div>
          </nav>
        </header>

        <Menu isOpen={this.state.menuIsOpen} />
      </div>
    )
  }
}

export default Navigation
