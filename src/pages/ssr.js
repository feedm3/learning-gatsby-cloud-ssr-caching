import * as React from 'react'
import fetch from 'node-fetch'
import {Link} from 'gatsby'

export default function SSR(props) {
  const {image, createdDate} = props.serverData

  return (
    <>
      <Link to='/'>Home</Link><br/>
      <h1>SSR: Server Side Rendering</h1>
      <p>Page created at: {createdDate}</p>
      <img
        alt='doggo'
        src={image}
      />
    </>
  )
}

export async function getServerData({params}) {
  console.log('getServerData');

  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=30, stale-while-revalidate=30',
    },
    props: {
      // data has the shape of "message", "status" where message is the image src
      image: data.message,
      createdDate: new Date().toUTCString(),
    }
  }
}
