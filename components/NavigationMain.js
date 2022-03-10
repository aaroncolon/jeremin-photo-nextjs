import React from 'react'
import Link from 'next/link'

export default class NavigationMain extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <nav className="site-navigation">
        <ul className="menu">
          <li>
            <a href="#info" className="open-popup" onClick={this.handleClick}>Info</a>
          </li>
          <li>
            <Link href="/[...slug]" as="/architecture">
              <a>Architecture</a>
            </Link>
          </li>
          <li>
            <Link href="/[...slug]" as="/headshots">
              <a>Headshots</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

}
