import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { validateLoginForm } from "../../../shared/utils/validators";
import LoginPageFooter from "./footer";
import LoginHeader from "./header";
import LoginPageForm from "./LoginPageForm";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from "react-router";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = { mail, password };
    login({ userDetails, navigate });
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
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Login);
