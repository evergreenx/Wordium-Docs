import React, { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { convertToRaw, convertFromRaw } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function TextEditor() {
  const [session] = useSession();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const router = useRouter();

  const { id } = router.query;
  console.log(editorState, "editorState");
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );
  console.log(snapshot, "two");

  useEffect(() => {
    if (snapshot?.data()?.editorState)
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
  }, [snapshot]);

  let data = convertToRaw(editorState.getCurrentContent());
  console.log(data, "data");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
          //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !jusitfy-center mx-auto"
        editorClassName="w-full mt-6 bg-white shadow-lg rounded-lg max-w-5xl mx-auto mb-12 p-10 "
      />
    </div>
  );
}
