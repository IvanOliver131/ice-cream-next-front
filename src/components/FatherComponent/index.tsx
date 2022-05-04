import { AppProps } from "next/app";

export function FatherComponent ({Component, pageProps}: AppProps) {
  return (
    <Component {...pageProps} />
  )
}