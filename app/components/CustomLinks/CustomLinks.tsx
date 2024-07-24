import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

const CustomLinks = () => {
  return (
    <div className="w-full h-full flex flex-col bg-secondary roundedLg p-10">
      <div>
        <h1>Customize your links</h1>
        <p className="mb-10 mt-2">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button variant="secondary" className="w-full">
          + Add new link
        </Button>
      </div>
      <div className="bg-secondary-light roundedMd my-10 flex flex-1 justify-center items-center">
        <div className=" max-w-[490px] w-full flex flex-col justify-center items-center text-center gap-5">
          <Image
            src="images/tab.svg"
            alt="Empty Container"
            width={300}
            height={200}
          />
          <h1>Let’s get you started</h1>
          <p>
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>
      <div className=" flex justify-end">
        <Button className="px-10">Save</Button>
      </div>
    </div>
  );
};

export default CustomLinks;
