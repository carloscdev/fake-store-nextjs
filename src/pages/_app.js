import '@styles/tailwind.css'
import '@styles/globals.css'
import StoreState from '@context/Store/StoreState'

function MyApp({ Component, pageProps }) {
  return (
    <StoreState>
      <Component {...pageProps} />
    </StoreState>
  )
}

export default MyApp
