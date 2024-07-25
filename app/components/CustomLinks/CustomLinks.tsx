"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { addLink as addLinkToFirestore } from "../../lib/firebase/firestoreUtils";
import { useAuth } from "../../context/AuthContext";

const CustomLinks = ({ links, addLink }) => {
  const [showInput, setShowInput] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const { user } = useAuth();

  const handleAddLink = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setLinkInput(e.target.value);
  };

  const handleSaveLink = async () => {
    if (linkInput.trim() !== "") {
      const newLink = { url: linkInput };

      if (user) {
        await addLinkToFirestore(user.uid, newLink);
      }

      addLink(newLink);
      setLinkInput("");
      setShowInput(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-secondary roundedLg p-5 md:p-10">
      <div>
        <h1>Customize your links</h1>
        <p className="mb-10 mt-2">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button variant="secondary" className="w-full" onClick={handleAddLink}>
          + Add new link
        </Button>
        {showInput ? (
          <div className="my-10">
            <input
              type="text"
              value={linkInput}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter link"
            />
            <Button
              variant="primary"
              className="w-full mt-2"
              onClick={handleSaveLink}
            >
              Save
            </Button>
          </div>
        ) : (
          <div className="bg-secondary-light roundedMd my-10 flex flex-1 justify-center items-center">
            <div className="max-w-[490px] w-full flex flex-col justify-center items-center text-center gap-5">
              <Image
                src="images/tab.svg"
                alt="Empty Container"
                width={300}
                height={200}
              />
              <h1>Let’s get you started</h1>
              <p>
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button className="px-10 w-full md:w-auto">Save</Button>
      </div>
    </div>
  );
};

export default CustomLinks;
