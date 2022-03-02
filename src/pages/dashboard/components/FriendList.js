import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const DUMMY_FRIENDS = [
  { id: 1, username: "Mark", isOnline: true },
  { id: 2, username: "Anna", isOnline: false },
  { id: 3, username: "JOhn", isOnline: false },
];

const FriendList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((item) => (
        <FriendsListItem key={item.id} {...item} />
      ))}
    </MainContainer>
  );
};

export default FriendList;
