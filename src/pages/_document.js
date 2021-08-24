
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
                        <noscript dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK47GTF"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

                        <Main />
                        <NextScript /></div>
                </body>
            </Html >
        )
    }
}