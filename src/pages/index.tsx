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
        <link rel="icon" href="/favicon.svg" />
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
        style={{ background: "#141414" }}
        buttonStyle={{ color: "#000", fontSize: "14px" }}
        expires={150}
      >
        Este site utiliza cookies, e possui formulários de contato.{" "}

      </CookieConsent>
    </div>
  )
}

export default Home
