import * as React from 'react'
import {useEffect, useState} from 'react'
import fetch from 'node-fetch'
import {Link} from 'gatsby'

export default function Cache(props) {
  const {image, createdDate} = props.serverData

  const [now, setNow] = useState(null)
  useEffect(() => {
    setInterval(() => {
      setNow(new Date().toUTCString());
    }, 1000)
  })

  return (
    <>
      <Link to='/'>Home</Link><br/>
      <h1>SSR: Server Side Rendering</h1>
      <p>Caching with "Cache-Control" header:</p>
      <ul>
        <li>Cache in Browser: 10 sec</li>
        <li>Cache in CDN: 1min + 4min stale-while-revalidate</li>
      </ul>
      <p>Now Time: {now}</p>
      <p>SSR Time: {createdDate} (delayed render time on server: 5 seconds)</p>
      <img
        alt='doggo'
        src={image}
        style={{maxWidth: "200px"}}
      />
    </>
  )
}

export async function getServerData({params}) {
  console.log('cache.js: Request incoming...');

  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log('cache.js: Request done. Returning data...');

  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
    },
    props: {
      // data has the shape of "message", "status" where message is the image src
      image: data.message,
      createdDate: new Date().toUTCString(),
    }
  }
}
