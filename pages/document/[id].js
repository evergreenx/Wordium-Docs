import React from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { useSession, getSession } from "next-auth/client";
import Icon from "@material-tailwind/react/Icon";
// import DocumentRow from "./DocumentRow";
import Login from "../../components/Login";
import { useRouter } from "next/dist/client/router";
import { signOut } from "next-auth/client";

import Button from "@material-tailwind/react/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextEditor from "../../components/TextEditor";
import Image from "next/image";

export default function documents() {
  const [session] = useSession();

  if (!session) {
    return <Login />;
  }
  const router = useRouter();
  const { id } = router.query;

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
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  if (!loadingSnapshot && !snapshot?.data()?.filename) {
    router.push("/");
  }

  console.log(snapshot, "two");
  return (
    <div>
         <div className="flex-row flex items-center text-xs space-x-1 mx-1 ">
            <p className="hover:bg-gray-100 cursor-pointer py-1 rounded px-3">
              File
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Edit
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              View
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Insert
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Format
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Tools
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Add-ons
            </p>
            <p className="hover:bg-gray-100 cursor-pointer py-1 px-3 rounded">
              Help
            </p>
          </div>
      <header className="flex justify-between items-center text-sm p-3">
        
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src="https://res.cloudinary.com/evergreenx/image/upload/v1641397142/wordium_docs-removebg-preview_nloamh.png"
            width={70}
            height={70}
            className="cursor-pointer"
          />
          {/* <Image src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" /> */}
        </span>

        <div className="flex-grow">
          <h2 className="font-semibold text-lg mx-2">
            {snapshot?.data()?.filename}
          </h2>
          {/* <Icon name="star" size="1xl"  color={'grey'} />
          <Icon name="folderzip" size="1xl"  color={'grey'} />
          <Icon name="cloud" size="1xl"  color={'grey'} /> */}

       
        </div>

        {/* <Button className="bg-blue-700  h-10 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          <Icon name="people" size="2xl" color="white" />
          Share
        </Button> */}

        {/* profile image */}
        <div className="user-area flex items-center ">
          <Button
            color="gray"
            buttonType="outline"
            size="regular"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-0 ml-5 mr-5 md:ml-11 h-16"
          >
            <Icon name={"chat"} size={"3xl"} />
          </Button>

          <img
            loading="lazy"
            className="inline cursor-pointer object-cover w-8 h-8  rounded-full"
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
      </header>

      <TextEditor />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
