import React, { useState } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";

const Login = (props) => {
  const [username, setUsername] = useState();
  return (
    <section className="login">
      <Modal
        title="Login"
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
            text: "Login",
            onClick: () => {},
          },
        ]}
      >
        <Textbox
          placeholder="Enter Email"
          type="email"
          onChangeFn={setUsername}
        />
        <Textbox placeholder="Enter Password" type="password" />
      </Modal>
    </section>
  );
};

export default Login;
