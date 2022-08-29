import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout