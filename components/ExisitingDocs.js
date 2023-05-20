import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import "firebase/firestore";
import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";
import Loader from "./Loader";
export default function ExisitingDocs() {
  const [session] = useSession();

  const [snapshot, loading] = useCollection(
    db
      .collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  return (
    <>
      <div className="">
        <div className="mt-6">
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
                you have no documents
              </h2>
              <span className="text-gray-500 text-sm text-center font-normal ">
                Create a doc to get started.
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
