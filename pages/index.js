import Head from "next/head";
import AddDoc from "../components/AddDoc";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Welocome to word processor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#FBF9FA] pb-10 px-10 ">
        <div className="max-w-5xl mx-auto">
          <AddDoc />
        </div>
      </section>
    </div>
  );
}
