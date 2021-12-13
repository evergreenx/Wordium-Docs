import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

export default function AddDoc() {
  return (
    <>
      <div className="py-6 flex items-center justify-between">
        <h2 className="text-gray-700 text-base font-normal ">
          Start a new document
        </h2>

        <div className="flex items-center divide-x ">
          <div>
            <Button
              color="black"
              buttonType="outline"
              size="sm"
              rounded={false}
              iconOnly={false}
              ripple="dark"
              className="border-0  border-blue-500 capitalize hover:bg-gray-400"
            >
              <h2
                className=" text-smbb
       font-medium "
              >
                Template gallery
              </h2>
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

      <div>
        <div className="relative h-52 w-40 border-2 border-slate-100 cursor-pointer hover:border-blue-700">
          <Image src="https://links.papareact.com/pju" layout="fill" />
        </div>

        <p className="text-sm ml-2 font-semibold  mt-2 text-gray-700">Blank</p>
      </div>
    </>
  );
}
