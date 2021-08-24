import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Imecanica from '../components/imecanica'
import Servicos from '../components/servicos'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Marcas from '../components/marcas'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Imecanica | Oficina Móvel</title>
        <meta name="description" content="Revisão do seu carro no conforto da sua casa" />
        <meta name="facebook-domain-verification" content="shivkloyttu01z8689d99qo334z8dk" />
        <link rel="icon" href="/favicon.svg" />

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-WK47GTF');`}}>
        </script>
      </Head>

      <main>
        <Hero />
        <Servicos />
        <Imecanica />
        <Marcas />

      </main>
      <Footer />
      <CookieConsent
        enableDeclineButton
        onDecline={() => {
          alert("Entendo que minha navegação será prejudicada");
        }}
        declineButtonText="Recusar"
        location="bottom"
        buttonText="Aceito"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#7cda24", fontSize: "13px" }}
        expires={150}
      >
        Este site utiliza cookies, e possui formulários de contato.{" "}

      </CookieConsent>
    </div>
  )
}

export default Home
