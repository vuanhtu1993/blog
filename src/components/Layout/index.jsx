import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'

import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by AnhTus" />
        {children}
      </div>
    )
  }
}

export default Layout
