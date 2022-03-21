import Head from "next/head";
import AddDoc from "../components/AddDoc";
import ExisitingDocs from "../components/ExisitingDocs";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/client";


import Login from "../components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-screen py-2  ">
      <Head>
        <title>Welcome to wordium docs</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel='shortcut icon' type='image/vnd.microsoft.icon' href='/favicon.ico'/> 
<link rel='apple-touch-icon' type='image/png' href='/icon.57.png'/> 
<link rel='apple-touch-icon' type='image/png' sizes='72x72' href='/icon.72.png'> <!-- iPad -->
<link rel='apple-touch-icon' type='image/png' sizes='114x114' href='/icon.114.png'> <!-- iPhone4 -->
<link rel='icon' type='image/png' href='/icon.114.png'></link>
      </Head>

      <Header />

      <section className="bg-[#FBF9FA] pb-10 px-10 ">
        <div className="max-w-5xl mx-auto">
          <AddDoc />
        </div>
      </section>

      <section className="pb-10 px-10 mt-5">
        <div className="max-w-6xl mx-auto">
          <ExisitingDocs />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
