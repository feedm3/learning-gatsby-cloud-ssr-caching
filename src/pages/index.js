import * as React from 'react'
import {Link} from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/ssr/cache'>SSR page with Caching</Link>
        </li>
        <li>
          <Link to='/ssr/no-cache'>SSR page without Caching</Link>
        </li>
      </ul>
    </>
  )
}
