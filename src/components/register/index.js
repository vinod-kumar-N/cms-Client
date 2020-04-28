import React, { useState } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";
import API from "../../api";

const Register = (props) => {

    const [toastMessgae, setToastMessgae] = useState({
    toastClass: "none",
    message: null,
    });

  const [name, setName] = useState();
  const [uName, setUsername] = useState();
  const [pwd, setPwd] = useState();
  const [confirmPwd, setConfirmedPwd] = useState();
  const [designation, setDesignation] = useState();
  const [email, setEmail] = useState();

  const register = () => {
    const options = {
        headers: { "Content-Type": "application/json" },
      };
      API.post(
        "/api/user/register",
        {
          name: name,
          userName: uName,
          password: pwd,
          confirmedpwd: confirmPwd,
          designation: designation,
          email: email
        },
        options
      )
      .then((res) => {
        console.log(res);
        })
      .catch((err) => {
        console.log(err);
      });
    };

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
            onClick: () => {
                register();
            },
          }
        ]}
      >
         {toastMessgae && (
          <p className={toastMessgae.toastClass}>{toastMessgae.message}</p>
        )}
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