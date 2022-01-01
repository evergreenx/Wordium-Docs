import React from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { useSession } from "next-auth/client";
import Icon from "@material-tailwind/react/Icon";
// import DocumentRow from "./DocumentRow";
import Login from "../../components/Login";
import { useRouter } from "next/dist/client/router";

export default function documents() {
  const [session] = useSession();

  if (!session) {
    return <Login />;
  }
  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  if (!loadingSnapshot && !snapshot?.data()?.filename) {
    router.push("/");
  }

  console.log(snapshot, "two");
  return (
    <div>
      <header className="flex justify-between items-center text-sm text-gray-700 p-3">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="article" size="4xl" color="blue" />
        </span>

        <div className="flex-grow">
          <h2 className="font-bold text-lg">{snapshot?.data()?.filename}</h2>

          <div className="flex-row flex items-center text-sm space-x-1 ">
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            
          </div>
        </div>
      </header>
    </div>
  );
}
