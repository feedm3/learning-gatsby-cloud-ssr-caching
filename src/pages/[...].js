import * as React from 'react'

export default function NotFound() {
  return (
    <>
      <h1>Fallback - This should never be rendered</h1>
    </>
  )
}

export async function getServerData(context) {
  console.log('[...].js: 404 request incoming...');

  return {
    props: {},
    status: 301,
    headers: {
      'Location': '/'
    }
  }
}
