import React, { useState } from "react";

<Icon name={"menu"} size={"2xl"} />;
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";

import Image from "next/image";
import { getProviders, providers } from "next-auth/react";
// import Input from "@material-tailwind/react/Input";

// import sigout

import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    // handleClose()
    signOut();
  };


  console.log(session)
  return (
    <>
      <div className="flex sticky top-0 z-50 px-4 py-2 justify-between items-center shadow-md bg-white">
        <div className="flex items-center">
          <Button
            color="gray"
            buttonType="outline"
            size="regular"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className=""
          >
            <Icon name={"menu"} size={"2xl"} />
          </Button>

          <Image
            src="https://res.cloudinary.com/evergreenx/image/upload/v1641396581/crypto_ark_uqjfic.svg"
            width={80}
            height={80}
          />

          <h2 className="text-2xl text-gray-500 mr-5 ml-3 md:mr-16">WDocs</h2>
        </div>

        <div className="searchbar w-1/3  hidden md:visible  self-center   h-12  items-center  px-4 py-5 mx-5 md:mx-20 bg-gray-100 rounded-lg focus-within:bg-white focus-within:border-1 focus-within:shadow-md focus-within:text-gray-600">
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

        <div className="user-area flex items-center  ">
          <Button
            color="gray"
            buttonType="outline"
            size="regular"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-0 ml-5 mr-5 md:ml-11 h-16 hidden md:visible "
          >
            <Icon name={"apps"} size={"3xl"} />
          </Button>

          <img
            loading="lazy"
            className=" cursor-pointer object-cover w-8 h-8  rounded-full"
            src={session?.user?.image}
            alt="Profile image"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />

          <div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
