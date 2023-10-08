import React, { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { convertToRaw, convertFromRaw } from "draft-js";
import TextEditorFooter from "./TextEditorFooter";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function TextEditor() {
  const { data: session } = useSession()

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  let count = editorState.length;


  const router = useRouter();

  const { id } = router.query;

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );


  useEffect(() => {
    if (snapshot?.data()?.editorState)
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
  }, [snapshot]);

  let data = convertToRaw(editorState.getCurrentContent());
  
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
    <div className="bg-[#c6c6c7] min-h-screen pb-16 overflow-scroll">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !jusitfy-center mx-auto"
        editorClassName="w-full mt-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mb-12 p-10 h-10"
      />

      <TextEditorFooter state={editorState} />
    </div>
  );
}
