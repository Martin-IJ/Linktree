import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, icon, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id} className="block mb-2 text-sm">
        {label}
      </label>
      <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5">
        {icon}
        <input {...props} className="w-full outline-none bg-transparent" />
      </div>
    </div>
  );
};

const ProfileInput: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="md:flex items-center justify-between w-full">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm whitespace-nowrap pr-5"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <input
        {...props}
        className="w-full outline-none bg-transparent lg:w-[430px] md:w-[344px] bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
      />
    </div>
  );
};

export { ProfileInput };
export default Input;
