import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function AddDoc() {
  return (
    <div className="py-6 flex items-center justify-between">
      <h2 className="text-gray-700 text-base font-noraml ">
        Start a new document
      </h2>

      <div className="flex items-center divide-x ">
          <div>
          <Button
          color="black"
          buttonType="outline"
          size="regular"
          rounded={false}
          iconOnly={false}
          ripple="dark"
          className="border-0  border-blue-500 capitalize hover:bg-gray-300"
        >
          Template gallery
          <Icon name={"unfold_more"} size={"2xl"} />
        </Button>
          </div>
      
<div>
<Button
          color="#a0aec0"
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
      
      </div>
    </div>
  );
}
