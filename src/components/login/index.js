import React, { useState } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";
import API from "../../api";

const Login = (props) => {
  const [toastMessgae, setToastMessgae] = useState({
    toastClass: "none",
    message: null,
  });
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const login = () => {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    API.post(
      "/users/login",
      {
        email: email,
        password: pwd,
      },
      options
    )
      .then((res) => {
        setToastMessgae((prevState) => {
          return {
            ...prevState,
            toastClass: "success",
            message: res.data.message,
          };
        });
      })
      .catch((err) => {
        setToastMessgae((prevState) => {
          return {
            ...prevState,
            toastClass: "error",
            message: err.response.data.message,
          };
        });
      });
  };
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
            onClick: () => {
              login();
            },
          },
        ]}
      >
        {toastMessgae && (
          <p className={toastMessgae.toastClass}>{toastMessgae.message}</p>
        )}

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
