import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function AddDoc() {
  return (
    <div className="py-6 flex items-center justify-between">
      <h2 className="text-gray-700 text-base font-noraml ">Start a new document</h2>

      <Button
        color="gray"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0 border-blue-500"
      >
        <Icon name={"more_vert"} size={"2xl"} />
      </Button>
    </div>
  );
}
