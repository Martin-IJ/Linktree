"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import CustomLinks from "./components/CustomLinks/CustomLinks";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";

interface HomePageProps {
  email?: string;
}

export default function HomePage({ email }: HomePageProps) {
  const [activeTab, setActiveTab] = useState("links");

  return (
    <main className="w-full h-full p-5">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex gap-5 mt-5">
        <div className="hidden lg:flex w-[40%] bg-secondary roundedLg p-28">
          <Image
            src="images/mobile-preview.svg"
            alt="Mobile Preview"
            width={200}
            height={200}
            className="img"
          />
        </div>
        <div className="w-full lg:w-[60%] h-full">
          {activeTab === "links" && <CustomLinks />}
          {activeTab === "profile" && <ProfileDetails />}
        </div>
      </div>
    </main>
  );
}
