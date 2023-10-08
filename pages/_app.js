import { useEffect} from "react";
import "@material-tailwind/react/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
// import  SessionProvider  from "next-auth/client";
import { SessionProvider } from "next-auth/react";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2886377, 6);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        
      </Head>

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
