import { Global } from "@emotion/react"
import { Work_Sans } from "@next/font/google"
import localFont from "@next/font/local"
import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from "next/app"
import GlobalStyle from "../styles/globals"
import "../styles/globals.tsx"

const silkSerif = localFont({
  variable: "--fontSerif",
  src: [
    {
      path: "./../public/fonts/SilkSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/SilkSerif-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../public/fonts/SilkSerif-LightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./../public/fonts/SilkSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--fontSans",
  // weight: ["300", "400", "500", "900"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.variable}  ${silkSerif.variable} `}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
