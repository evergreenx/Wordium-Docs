import React from "react";
// import  Button  from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Login() {
  const handleSignIn = () => {
    signIn();
  };
  return (
    <div className="mx-auto w-full justify-center items-center flex flex-col ">
      <Image
        src={"https://res.cloudinary.com/evergreenx/image/upload/v1641374992/crypto_ark_1_tzwqvl.png"}
        width={"300"}
        height={"400"}
        objectFit="contain"
      />
      {/* <Button>Login</Button> */}

      <Button
        color="orange"
        buttonType="filled"
        size="large"
        rounded={false}
        iconOnly={false}
        ripple="dark"
        className="border-0"
        onClick={handleSignIn}
        className="border-0 border-blue-500 w-32"
      >
        <h2
          className=" text-smbb
       font-medium "
        >
          Login
        </h2>
      </Button>
    </div>
  );
}
