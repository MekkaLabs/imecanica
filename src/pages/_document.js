

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

                        <script dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-WK47GTF');`}}></script>

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

