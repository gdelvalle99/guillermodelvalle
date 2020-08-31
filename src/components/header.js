import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,

      }}
    >
      <p style={{ margin: 0,
                  float: 'right', }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: 10,
          }}
        >
          About me
        </Link>
        <Link
          to="/projects/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: 10,
          }}
          >Projects</Link>
        <Link
          to="/work/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: 10,
          }}
          >Work</Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
