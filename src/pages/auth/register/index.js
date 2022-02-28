import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { validateRegisterForm } from "../../../shared/utils/validators";
import RegisterPageFooter from "./footer";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, password, username, setIsFormValid]);

  const handleRegister = () => {
    console.log("hii");
  };
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleLogin={handleRegister}
      />
    </AuthBox>
  );
};

export default Register;
