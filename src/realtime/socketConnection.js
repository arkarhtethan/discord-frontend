import io from "socket.io-client";

let socket = null;

export const connectWithSocket = (userDetails) => {
  socket = io("http://localhost:5002", {
    auth: {
      token: userDetails.token,
    },
  });
  socket.on("connect", () => {
    console.log("successfully connected with server");
    console.log(socket.id);
  });
};
