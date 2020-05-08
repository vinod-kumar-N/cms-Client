import React, { useState, useReducer } from "react";
import Modal from "react-dialog";
import Textbox from "../textbox";
import API from "../../api";
import { connect } from "react-redux";
import { setName } from "../../actions";
import {
  initialState,
  registrationReducer,
} from "../../store/registrationStore";

const Login = (props) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const [toastMessgae, setToastMessgae] = useState({
    toastClass: "none",
    message: null,
  });
  const dispatchFn = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };
  const login = () => {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    API.post(
      "/users/login",
      {
        email: state.email,
        password: state.password,
      },
      options
    )
      .then((res) => {
        props.setName(res.data.name);
        localStorage.setItem("auth_token", res.data.token);
        setToastMessgae((prevState) => {
          return {
            ...prevState,
            toastClass: "success",
            message: res.data.message,
          };
        });
        setTimeout(() => {
          props.closeModal();
        }, 1000);
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

        <Textbox
          placeholder="Enter Email"
          type="email"
          onChangeFn={(emailArg) => {
            dispatchFn("SET_EMAIL", emailArg);
          }}
        />
        <Textbox
          placeholder="Enter Password"
          type="password"
          onChangeFn={(pwdArg) => {
            dispatchFn("SET_PSD", pwdArg);
          }}
        />
      </Modal>
    </section>
  );
};
const mapStateToProps = (store) => ({
  userName: store.userName,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (userName) => dispatch(setName(userName)),
  };
};
Login.defaultProps = {
  userName: "Guest",
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
