import React, { useState } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";

const Register = (props) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [confirmedpwd, setConfirmedPwd] = useState();
  const [designation, setDesignation] = useState();
  const [email, setEmail] = useState();
  return (
    <section className="register">
      <Modal
        title="Register"
        modal={true}
        onClose={props.closeModal}
        buttons={[
          {
            text: "Close",
            onClick: () => {
              props.closeModal();
            },
          },
          {
            text: "Submit",
            onClick: () => {},
          },
        ]}
      >
        <Textbox placeholder="Enter Name" type="text" onChangeFn={setName} />
        <Textbox placeholder="Enter Username" type="text" onChangeFn={setUsername} />
        <Textbox
          placeholder="Enter Password"
          type="password"
          onChangeFn={setPwd}
        />
         <Textbox
          placeholder="Enter Confirmed Password"
          type="password"
          onChangeFn={setConfirmedPwd}
        />
        <Textbox placeholder="Enter Designation" type="text" onChangeFn={setDesignation} />
        <Textbox placeholder="Enter Email" type="email" onChangeFn={setEmail} />
      </Modal>
    </section>
  );
};

export default Register;
