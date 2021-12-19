import React, { useState } from "react";

<Icon name={"menu"} size={"2xl"} />;
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { getProviders, providers } from "next-auth/client";
// import Input from "@material-tailwind/react/Input";

// import sigout

import { signOut } from "next-auth/client";

import { useSession } from "next-auth/client";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const [session, loading] = useSession();
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
            class="inline cursor-pointer object-cover w-8 h-8  rounded-full"
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
