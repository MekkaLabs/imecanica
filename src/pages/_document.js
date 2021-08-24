
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <div>
                        <title>Imecanica</title>
                        <meta name="description" content="Oficina Móvel" />
                        <link rel="icon" href="/favicon.svg" />



                    </div>
                </Head>
                <body>
                    <div>


                        <Main />
                        <NextScript /></div>
                </body>
            </Html >
        )
    }
}