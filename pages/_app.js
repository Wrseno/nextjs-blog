import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  return (  
  <>
    <NextNProgress 
      color='#38bdf8'
      height={6}
    />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
