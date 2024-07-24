import Button from "../Button/Button";
import { PiImage } from "react-icons/pi";
import { ProfileInput } from "../FormInput/Input";

const ProfileDetails = () => {
  return (
    <div className="w-full h-full flex flex-col bg-secondary roundedLg p-5 md:p-10">
      <div>
        <h1>Profile Details</h1>
        <p className="mt-2">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="bg-secondary-light h-fit p-5 roundedMd my-10 lg:flex space-y-5 lg:space-y-0 gap-5 justify-between items-center">
        <p className="flex-1">Profile picture</p>

        <button className="w-[193px] h-[193px] cursor-pointer flex flex-col justify-center items-center active:bg-default-light/50 bg-default-extraLight roundedMd">
          <PiImage className="text-default text-5xl" />
          <span className="text-default font-semibold">+Upload Image</span>
        </button>
        <p className="p flex-1">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>

      <div className="bg-secondary-light h-fit w-full p-5 roundedMd my-10 flex flex-col gap-5 justify-between items-center">
        <ProfileInput
          label="First Name<sup>*</sup>"
          id="firstName"
          type="text"
          placeholder="e.g. John"
        />
        <ProfileInput
          label="Last Name<sup>*</sup>"
          id="lastName"
          type="text"
          placeholder="e.g. Appleseed"
        />
        <ProfileInput
          label="Email"
          id="email"
          type="email"
          placeholder="e.g. email@example.com"
        />
      </div>
      <div className="flex justify-end">
        <Button className="px-10">Save</Button>
      </div>
    </div>
  );
};

export default ProfileDetails;
