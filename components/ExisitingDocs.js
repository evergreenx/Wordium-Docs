import React from "react";

import Icon from "@material-tailwind/react/Icon";

export default function ExisitingDocs() {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <h2 className="font-medium">My Documents</h2>

          <div className="flex items-center">
            <h2 className="mr-10 font-medium">Date Created</h2>

            <Icon className="text-green-500" color={'gray'} name="folder" size={"3xl"} />
          </div>
        </div>
      </div>
    </>
  );
}
