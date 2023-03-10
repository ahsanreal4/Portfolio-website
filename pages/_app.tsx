/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import '@styles/globals.scss'
import '@styles/scss/theme-4.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const addLinks = () => {}

  const addScripts = () => (
    <>
      <Script id='font-awesome-cdn' src='assets/fontawesome/js/all.js' />
    </>
  )

  return (
    <>
      {addLinks()}
      {addScripts()}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
