import React, { useState } from "react";
import Head from "next/head";
import AddDoc from "../components/AddDoc";
import ExisitingDocs from "../components/ExisitingDocs";
import Header from "../components/Header";
// import getsession and usesession
import { useSession, getSession } from "next-auth/client";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

import Login from "../components/Login";

export default function Home() {
  // const { session, status } = useSession();
  const [session] = useSession();

  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  if (!session) {
    return <Login />;
  }

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Welocome to wordium docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#FBF9FA] pb-10 px-10 ">
        <div className="max-w-5xl mx-auto">
          <AddDoc />
        </div>
      </section>

      <section className="pb-10 px-10 mt-5">
        <div className="max-w-5xl mx-auto">
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
