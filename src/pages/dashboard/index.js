import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./components/Sidebar";
import FriendsSideBar from "./components/FriendsSideBar";
import Messanger from "./components/Messanger";
import AppBar from "./components/AppBar";
import { logout } from "../../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSideBar />
      <Messanger />
      <AppBar />
    </Wrapper>
  );
};
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(Dashboard);
