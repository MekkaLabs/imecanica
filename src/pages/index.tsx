import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Imecanica from '../components/imecanica'
import Servicos from '../components/servicos'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Marcas from '../components/marcas'
import Teste1 from '../components/teste/teste-1'




const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Este site utiliza cookies, para melhor experiência do úsuario.{" "}


      </CookieConsent>

    </div>
  )
}

export default Home
