import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";
import Head from "next/head";
// import  SessionProvider  from "next-auth/client";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
