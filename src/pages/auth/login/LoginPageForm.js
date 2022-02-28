import React from "react";
import InputWithLabel from "../../../shared/components/InputWithLabel";

const LoginPageForm = ({ mail, password, setMail, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email"
        type="text"
        placeholder="Enter email address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageForm;
