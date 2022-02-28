import { Typography } from "@mui/material";
import React from "react";

const LoginHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginHeader;
