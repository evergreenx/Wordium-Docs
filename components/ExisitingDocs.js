import React, { useEffect } from "react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import "firebase/firestore";
import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";
import Loader from "./Loader";
export default function ExisitingDocs() {
  const [session] = useSession();

  const [snapshot, loading] = useCollectionOnce(
    db
      .collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  // console.log(snapshot, "two");
  return (
    <>
      <div className="">
        <div className="mt-6">
          {/* {loading && <span>Collection: Loading...</span>} */}

          {/* spinner loader  */}
          {loading && <Loader />}

          {snapshot?.docs?.length > 0 ? (
            <div className="flex justify-between items-center text-sm text-gray-700">
              <h2 className="font-medium">My Documents</h2>

              <div className="flex items-center">
                <h2 className="mr-10 font-medium">Date Created</h2>

                <Icon
                  className="text-green-500"
                  color={"gray"}
                  name="folder"
                  size={"3xl"}
                />
              </div>
            </div>
          ) : (
            <div className="mt-6 text-center">
              <h2 className="text-gray-700 text-xl text-center font-normal ">
                You have no Documents
              </h2>
              <span className="text-gray-500 text-sm text-center font-normal ">
                Create a document to get started
              </span>
            </div>
          )}
          {snapshot?.docs.map((doc) => (
            <DocumentRow
              key={doc.id}
              id={doc.id}
              filename={doc.data().filename}
              date={doc.data().timestamp}
            />
          ))}

         
        </div>
      </div>
    </>
  );
}
