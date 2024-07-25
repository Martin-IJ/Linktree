import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuLink } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Image from "next/image";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container flex justify-between items-center py-5 bg-secondary bgRadius">
      <div>
        <div className="hidden md:flex">
        <Logo /></div>
        <Image
          width={30}
          height={30}
          alt="Mobile Logo"
          src="images/mobile-logo.svg"
          className="md:hidden"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab("links")}
          className={`flex items-center gap-2 px-5 py-2 roundedMd font-semibold transition duration-300 ease-in-out ${
            activeTab === "links"
              ? "bg-default-extraLight text-default"
              : "bg-transparent"
          }`}
        >
          <LuLink />
          <span className="hidden md:flex">Links</span>
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-5 py-2 roundedMd font-semibold transition duration-300 ease-in-out ${
            activeTab === "profile"
              ? "bg-default-extraLight text-default"
              : "bg-transparent"
          }`}
        >
          <CgProfile />
          <span className="hidden md:flex">Profile Details</span>
        </button>
      </div>
      <Button variant="secondary" className="w-auto">
        <span className="hidden md:flex">Preview</span>{" "}
        <MdOutlineRemoveRedEye className="md:hidden text-default text-lg" />
      </Button>
    </div>
  );
};

export default Navbar;
