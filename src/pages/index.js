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
      <p>Note: You might need to wait 5 seconds for the page to show after you clicked on the link and it's not yet
        cached. This is because Gatsby waits for the page to render on server before navigating to it. To show the
        effects of caching, the render is delayed by 5 seconds.</p>
      <p>Repository: <a href="https://github.com/feedm3/learning-gatsby-cloud-ssr-caching"
                        target="_blank" rel="noreferrer" >https://github.com/feedm3/learning-gatsby-cloud-ssr-caching</a></p>
    </>
  )
}
