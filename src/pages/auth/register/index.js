import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { validateRegisterForm } from "../../../shared/utils/validators";
import RegisterPageFooter from "./footer";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from "react-router";

const Register = ({ register }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, password, username, setIsFormValid]);

  const handleRegister = () => {
    const userDetails = { mail, password, username };
    register(userDetails, navigate);
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Register);
