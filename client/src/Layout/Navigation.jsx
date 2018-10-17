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

    return (
      <div>
        <header className="w-full fixed bg-white shadow z-50">
          <nav className="flex justify-between items-center py-2 px-6">
            <div className="h-8 w-8 flex justify-center items-center" onClick={() => this.openMenu()}>
              <i className="fa fa-bars text-grey-darker text-3xl"></i>
            </div>

            <div className="w-32 flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-12" />
              <small className="text-grey">React Navigation</small>
            </div>

            <div className="w-8 flex justify-center">
              {!isAuthenticated() &&
                <button onClick={() => this.login()}>
                  Log in
                </button>}
              {isAuthenticated() &&
                <button onClick={() => this.logout()}>
                  Log out
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
