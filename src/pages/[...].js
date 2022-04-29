import * as React from 'react'

export default function NotFound() {
  return (
    <>
      <h1>Fallback - This should never be rendered</h1>
    </>
  )
}

export async function getServerData(context) {
  const referer = context.headers.get('referer') || context.headers.get('host');
  const baseUrl = new URL(referer);
  const redirectOrigin = baseUrl.origin;


  console.log('[...].js: 404 request incoming. Redirect to origin:', redirectOrigin);

  return {
    props: {},
    status: 301,
    headers: {
      'Location': redirectOrigin + '/'
    }
  }
}
