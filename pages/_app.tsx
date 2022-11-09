import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DarkModeContext } from '../context/DarkModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <DarkModeContext>
      <Component {...pageProps} />
    </DarkModeContext>
  )
}
