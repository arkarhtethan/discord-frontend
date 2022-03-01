import React from "react";
import { styled } from "@mui/system";
import Sidebar from "./components/Sidebar";
import FriendsSideBar from "./components/FriendsSideBar";
import Messanger from "./components/Messanger";
import AppBar from "./components/AppBar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSideBar />
      <Messanger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
