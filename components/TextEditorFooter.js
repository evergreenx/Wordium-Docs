import React from "react";

import Icon from "@material-tailwind/react/Icon";

export default function TextEditorFooter({ state }) {
  const getWordCount = (editorState) => {
    const plainText = editorState.getCurrentContent().getPlainText("");
    const regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
    const cleanString = plainText.replace(regex, " ").trim(); // replace above characters w/ space
    const wordArray = cleanString.match(/\S+/g); // matches words according to whitespace
    return wordArray ? wordArray.length : 0;
  };
  return (
    <>
      <div className="bg-white w-full shadow-lg p-3 text-sm fixed inset-x-0 bottom-0 z-50 uppercase">
        {/* About {getWordCount(state)} words */}

        {getWordCount(state) > 0 && <p>About {getWordCount(state)} words</p>}
        {getWordCount(state) <= 0 && <p>0 word</p>}
      </div>
    </>
  );
}
