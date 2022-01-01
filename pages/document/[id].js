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
      <header className="flex justify-between items-center text-sm p-3">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="article" size="4xl" color="blue" />
          {/* <Image src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" /> */}
        </span>

        <div className="flex-grow">
          <h2 className="font-bold text-lg">{snapshot?.data()?.filename}</h2>
          {/* <Icon name="star" size="1xl"  color={'grey'} />
          <Icon name="folderzip" size="1xl"  color={'grey'} />
          <Icon name="cloud" size="1xl"  color={'grey'} /> */}

        

          <div className="flex-row flex items-center text-sm justify-around ">
            <p className="hover:bg-gray-100 cursor-pointer py-1 rounded px-3">File</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Edit</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">View</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Insert</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Format</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Tools</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Add-ons</p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">Help</p>
          </div>
        </div>
      </header>
    </div>
  );
}
