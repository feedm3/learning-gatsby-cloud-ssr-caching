import * as React from 'react'
import {Link} from 'gatsby'

export default function Home(props) {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/ssr-instant'>SSR Instant page</Link>
        </li>
        <li>
          <Link to='/ssr-delayed'>SSR Delayed page</Link>
        </li>
      </ul>
    </>
  )
}
