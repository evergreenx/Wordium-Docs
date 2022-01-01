import React from "react";
import Button from "@material-tailwind/react/Button";
import { useRouter } from "next/router";
import Icon from "@material-tailwind/react/Icon";

export default function DocumentRow({ id, filename, date }) {

  const router  = useRouter();
  return (
    <div
    onClick={() => router.push(`/document/${id}`)}
    className="flex items-center hover:bg-gray-100 text-gray-400 px-1 py-3 text-sm cursor-pointer rounded-xl">
      <Icon
        className="text-green-500"
        color={"blue"}
        name="article"
        size={"3xl"}
      />
      <p className="text-gray-700 w-10 pr-10 flex-grow truncate pl-5 font-semibold">{filename}</p>
      <p className="text-gray-700 pr-10 ">
        {date?.toDate().toLocaleDateString()}
      </p>

      <Button
      color="gray"
      buttonType="outline"
      rounded={true}
      iconOnly={true}
      ripple="dark"
      className="border-0 border-blue-500">
        <Icon name={"more_vert"} size={"2xl"} />
      </Button>
    </div>
  );
}
