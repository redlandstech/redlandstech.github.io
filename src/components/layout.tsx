import React from 'react'
import {Link} from 'gatsby'
import {GlobalStyle} from '../styles/theme'
import * as logo from '../../static/logo-purple.png'

interface Props {
  readonly title: string
  readonly children?: React.ReactNode[] | React.ReactNode
}

export default class Layout extends React.Component<Props> {
  render() {
    const {title, children} = this.props

    return (
      <>
        <GlobalStyle />
        <nav className="navigation">
          <ul>
            <li>
              <Link to={`/`}>
                <img src={logo} width={167} />
              </Link>
            </li>
            <li>
              <Link to={`/tags`}>Tags</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </nav>
        <main className="content" role="main">
          {children}
        </main>
        <footer className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}
