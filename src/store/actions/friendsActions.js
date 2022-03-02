import * as apiClient from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDINGS: "FRIENDS.SET_PENDINGS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, clsoeDialogHandler) => {
      dispatch(sendFriendInvitation(data, clsoeDialogHandler));
    },
  };
};

const sendFriendInvitation = (data, clsoeDialogHandler) => {
  return async (dispatch) => {
    const response = await apiClient.sendFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been sent"));
      clsoeDialogHandler();
    }
  };
};
