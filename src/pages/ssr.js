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
      <p>This page took 5 seconds to be returned from the server</p>
      <img
        alt='doggo'
        src={image}
      />
    </>
  )
}

export async function getServerData({params}) {
  console.log('Request incoming...');

  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log('Request done. Returning data...');

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
