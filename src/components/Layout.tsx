import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout