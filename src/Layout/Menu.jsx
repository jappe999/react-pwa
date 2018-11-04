import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    const { isOpen } = this.props

    return (
      <div
        className="h-screen w-4/5 max-w-xs fixed mt-16 bg-grey-darkest shadow overflow-y-auto z-40"
        style={{
          transition: '.3s transform',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <ul className="list-reset">
          <li className="py-4 px-6 hover:bg-black text-white cursor-pointer">
            Menu Item
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Menu;