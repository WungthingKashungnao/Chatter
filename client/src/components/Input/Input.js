import React from "react";

const Input = ({
  label = "", // label name
  name = "", //name of input
  type = "text", //type of input
  className = "", // class for the whole container of the input
  inputClassName = "", //class for the input
  isRequired = true,
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    // input container start
    <div className={`${className}`}>
      <label for={name} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
    // input container end
  );
};

export default Input;
