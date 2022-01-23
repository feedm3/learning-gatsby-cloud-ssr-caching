import * as React from 'react'
import {Link} from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>SSR Caching with Gatsby</h1>
      <ul>
        <li>
          <Link to='/ssr/cache'>SSR page with "Cache-Control" Header</Link>
        </li>
        <li>
          <Link to='/ssr/no-cache'>SSR page without "Cache-Control" Headers</Link>
        </li>
      </ul>
      <p>Repository: <a href="https://github.com/feedm3/learning-gatsby-cloud-ssr-caching"
                  target="_blank">https://github.com/feedm3/learning-gatsby-cloud-ssr-caching</a></p>
    </>
  )
}
