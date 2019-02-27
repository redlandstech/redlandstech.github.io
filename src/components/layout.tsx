import React from 'react'
import {Link} from 'gatsby'
import {GlobalStyle} from '../styles/theme'

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
              <Link to={`/`}>{title}</Link>
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
