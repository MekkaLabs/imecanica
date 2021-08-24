import '../styles/globals.css'


import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WK47GTF' });
  }, []);
  return (

    <div>
      <main>

        <Component {...pageProps} />
      </main>

    </div>

  )
}
export default MyApp
