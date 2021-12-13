import React from "react";
// import  Button  from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Login() {


    const handleSignIn = ()  =>{

        signIn();
    }
  return (
    <div className="mx-auto w-full flex flex-col">
      <Image
        src={"https://links.papareact.com/1ui"}
        width={"300"}
        height={"400"}
        objectFit="contain"
      />
      {/* <Button>Login</Button> */}

      <Button
        color="red"
        buttonType="filled"
        size="large"
        rounded={false}
        iconOnly={false}
        ripple="dark"
        className="border-0"
        onClick={handleSignIn}
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
