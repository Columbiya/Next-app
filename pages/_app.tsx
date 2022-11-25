import NextNProgress from 'nextjs-progressbar'
import { AppProps } from '../node_modules/next/app'
import '../styles/globals.scss'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />   
    </>
  )
}

export default MyApp
