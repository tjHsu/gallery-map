import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-3xl">taipei gallery map</a>
      </Link>
    </div>
  )
}

export default Header