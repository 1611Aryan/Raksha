import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBWQ7B6YLV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-NBWQ7B6YLV');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
