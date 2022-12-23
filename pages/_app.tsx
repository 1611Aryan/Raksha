import { Global } from "@emotion/react"
import { Inter, Playfair_Display } from "@next/font/google"
import type { AppProps } from "next/app"
import GlobalStyle from "../styles/globals"
import "../styles/globals.tsx"

const inter = Inter({ subsets: ["latin"] })
const playFair = Playfair_Display({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${playFair.className}`}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </main>
  )
}
