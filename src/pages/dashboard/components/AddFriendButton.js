import React, { useState } from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

const AddFriendButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={() => setOpen(true)}
      />
      <AddFriendDialog
        isDialogOpen={open}
        closeDialogHandler={() => setOpen(false)}
      />
    </>
  );
};

export default AddFriendButton;
