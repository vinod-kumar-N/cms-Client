import React, { useState } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
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
        <Textbox placeholder="Enter Email" type="email" onChangeFn={setEmail} />
        <Textbox
          placeholder="Enter Password"
          type="password"
          onChangeFn={setPwd}
        />
      </Modal>
    </section>
  );
};

export default Login;
