import React from "react";
import Input from "../../components/Input/Input";

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome</div>
      <div className="text-xl font-light mb-10">Sign up now to get started</div>
      <Input
        label="Full name"
        name="name"
        placeholder="Enter your full name"
        inputClassName="mb-6"
        className="w-[50%]"
      />
      <Input
        label="Email address"
        name="email"
        placeholder="Enter your email address"
        inputClassName="mb-6"
        className="w-[50%]"
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter your password"
        inputClassName="mb-6"
        className="w-[50%]"
      />
    </div>
  );
};

export default Form;
