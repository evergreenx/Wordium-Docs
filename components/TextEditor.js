import React from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function TextEditor() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !jusitfy-center mx-auto"
        editorClassName="w-full mt-6 bg-white  shadow-lg rounded-lg max-w-5xl mx-auto mb-12 p-10 "
      />
    </div>
  );
}
