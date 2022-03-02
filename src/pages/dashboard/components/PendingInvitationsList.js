import React from "react";
import { styled } from "@mui/system";
import PendingInvitationItem from "./PendingInvitationItem";

const DUMMY_INVITATION = [
  { _id: "1", senderId: { username: "Mark", mail: "mark@gmail.com" } },
  { _id: "2", senderId: { username: "John", mail: "john@gmail.com" } },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((item) => (
        <PendingInvitationItem key={item._id} {...item} />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
