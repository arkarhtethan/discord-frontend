import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListItem = ({ username, isOnline, id }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar sx={{ bgcolor: "#5865f2", fontSize: "20px" }}>
        {username.substring(0, 2)}
      </Avatar>
      <Typography
        style={{ marginLeft: "7px", fontWeight: 700, color: "#8e9297" }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
