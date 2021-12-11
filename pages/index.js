import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Welocome to word processor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




<Header />

    </div>
  );
}
