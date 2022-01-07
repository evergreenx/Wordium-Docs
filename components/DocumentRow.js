import React from "react";
import Button from "@material-tailwind/react/Button";
import { useRouter } from "next/router";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

export default function DocumentRow({ id, filename, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/document/${id}`)}
      className="flex items-center hover:bg-gray-100 text-gray-400 px-1 py-3 text-sm cursor-pointer rounded-xl"
    >
      <Image
        src="https://res.cloudinary.com/evergreenx/image/upload/v1641397142/wordium_docs-removebg-preview_nloamh.png"
        width={50}
        height={50}
        className="cursor-pointer"
      />

      <p className="text-gray-700 w-10 pr-10 flex-grow truncate pl-5 font-semibold">
        {filename}
      </p>
      <p className="text-gray-700 pr-10 ">
        {date?.toDate().toLocaleDateString()}
      </p>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
      >
        <Icon name={"more_vert"} size={"2xl"} />
      </Button>
    </div>
  );
}
