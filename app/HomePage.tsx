"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import CustomLinks from "./components/CustomLinks/CustomLinks";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import { getLinks } from "./lib/firebase/firestoreUtils";
import { useAuth } from "./context/AuthContext";

interface HomePageProps {
  email?: string;
}

interface Link {
  url: string;
}

export default function HomePage({ email }: HomePageProps) {
  const [activeTab, setActiveTab] = useState("links");
  const [links, setLinks] = useState<Link[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLinks = async () => {
      if (user) {
        const fetchedLinks = await getLinks(user.uid);
        setLinks(fetchedLinks.map((link) => link.link));
      }
    };

    fetchLinks();
  }, [user]);

  const addLink = (newLink: Link) => {
    setLinks([...links, newLink]);
  };

  return (
    <main className="w-full h-full p-5">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex gap-5 mt-5">
        <div className="hidden lg:flex w-[40%] bg-secondary roundedLg p-28 relative">
          <Image
            src="/images/mobile-preview.svg"
            alt="Mobile Preview"
            width={200}
            height={200}
            className="img"
          />
          <div className="absolute top-20 left-20">
            {links.map((link, index) => (
              <div key={index} className="mb-2">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full">
          {activeTab === "links" && (
            <CustomLinks links={links} addLink={addLink} />
          )}
          {activeTab === "profile" && <ProfileDetails />}
        </div>
      </div>
    </main>
  );
}
