import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { validateLoginForm } from "../../../shared/utils/validators";
import LoginPageFooter from "./footer";
import LoginHeader from "./header";
import LoginPageForm from "./LoginPageForm";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    console.log("hii");
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginPageForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
