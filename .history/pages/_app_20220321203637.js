import "@material-tailwind/react/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
// import  SessionProvider  from "next-auth/client";
import { Provider } from "next-auth/client";
import { hotjar } from "react-hotjar";

hotjar.initialize(2886377, 6);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;