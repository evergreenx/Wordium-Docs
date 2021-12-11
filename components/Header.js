import React from "react";

import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
// import Input from "@material-tailwind/react/Input";

export default function Header() {
  return (
    <div className="flex sticky top-0 z-50 px-4 py-2 justify-between items-center shadow-md bg-white">
      <div className="flex items-center">
        <Button
          color="gray"
          buttonType="outline"
          size="regular"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0 border-blue-500"
        >
          <Icon name={"menu"} size={"2xl"} />
        </Button>

        <Icon name={"description"} size={"4xl"} color={"blue"} />
        <h2 className="text-2xl text-gray-500 mr-5 ml-5 md:mr-16">Docs</h2>
      </div>

      <div class="searchbar w-1/3  invisible md:visible  self-center   h-12 flex items-center  px-4 py-5 mx-5 md:mx-20 bg-gray-100 rounded-lg focus-within:bg-white focus-within:border-1 focus-within:shadow-md focus-within:text-gray-600">
        <Button
          color="gray"
          buttonType="outline"
          size="regular"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0"
        >
          <Icon name={"search"} size={"2xl"} />
        </Button>
        <input
          type="search"
          placeholder="Search"
          className=" searchInput px-5 flex-grow border-0 text-gray-600 focus:outline-none bg-transparent "
        />
      </div>

      <div class="user-area flex items-center ">
        <Button
          color="gray"
          buttonType="outline"
          size="regular"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0 ml-5 mr-5 md:ml-11 h-16"
        >
          <Icon name={"apps"} size={"3xl"} />
        </Button>

        <img
          loading="lazy"
          class="inline cursor-pointer object-cover w-10 h-10  rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
    </div>
  );
}
