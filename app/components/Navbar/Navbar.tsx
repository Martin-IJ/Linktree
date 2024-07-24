import React from "react";
import { CgProfile } from "react-icons/cg";
import { LuLink } from "react-icons/lu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container flex justify-between items-center py-5 bg-secondary bgRadius">
      <Logo />
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
          Links
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
          Profile Details
        </button>
      </div>
      <Button variant="secondary" className="w-auto">
        Preview
      </Button>
    </div>
  );
};

export default Navbar;
