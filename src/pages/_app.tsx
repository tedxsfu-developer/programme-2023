import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helvetica/HelveticaNeue-Roman.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeue-Lt.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNeue-Bd.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
