import React, { useState } from "react";
import Input from "../../components/Input/Input"; //input component
import Button from "../../components/Button/Button"; //button component
import { useNavigate } from "react-router-dom";

// this Form component is being used for both sign in and sign up
const Form = ({ isSignInPage = true }) => {
  // state for form handling
  const [data, setData] = useState({
    //  let the full name variable be there if isSignInPage=false
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // console.log("Data", data);
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      {/* isSignInPage is true show the text back*/}
      <div className="text-4xl font-extrabold">
        Welcome {isSignInPage && "Back"}
      </div>
      {/* show texts based on isSignInPage state */}
      <div className="text-xl font-light mb-10">
        {isSignInPage
          ? "Sign in now to get started"
          : "Sign up now to get started"}
      </div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={() => console.log("submitted")}
      >
        {/* if  isSignInPage = true do not show this particular input component*/}
        {!isSignInPage && (
          //this input is a component and not an element
          // Full name
          <Input
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
            label="Full name"
            name="name"
            placeholder="Enter your full name"
            inputClassName="mb-6"
            className="w-[50%]"
          />
        )}
        {/* this input is a component and not an element */}
        {/* Email */}
        <Input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          label="Email address"
          name="email"
          placeholder="Enter your email address"
          inputClassName="mb-6"
          className="w-[50%]"
        />

        {/* Password */}
        {/* this input is a component and not an element */}
        <Input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          label="Password"
          name="password"
          placeholder="Enter your password"
          inputClassName="mb-6"
          className="w-[50%]"
        />

        {/* show texts based on isSignInPage state */}
        {/* this button is a component not an element */}
        {/* Sign In/Sign Up Button */}
        <Button
          label={isSignInPage ? "Sign In" : "Sign Up"}
          className="w-[50%] my-3"
          type="submit"
        />
      </form>

      <div>
        {/* show texts based on isSignInPage state */}
        {isSignInPage ? "Don't have an account?" : "Already have an account?"}
        <span
          className="text-primary cursor-pointer underline"
          //navigate sing in on sing up based on the isSignInPage prop
          onClick={() => {
            navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`);
          }}
        >
          {isSignInPage ? "Sign Up" : "Sign In"}
        </span>
      </div>
    </div>
  );
};

export default Form;
