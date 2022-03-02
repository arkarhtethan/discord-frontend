const { friendsActions } = require("../actions/friendsActions");

const initial = {
  friends: [],
  pendingFriends: [],
  onlineUsers: [],
};

const reducer = (state=initial, action) => {
  switch (action.type) {
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    case friendsActions.SET_PENDINGS:
      return {
        ...state,
        pendingFriendsInvitations: action.pendingFriendsInvitations,
      };
    default:
      return state;
  }
};
