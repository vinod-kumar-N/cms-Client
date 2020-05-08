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

const Register = (props) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  const dispatchFn = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };
  const [toastMessgae, setToastMessgae] = useState({
    toastClass: "none",
    message: null,
  });

  const register = () => {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    API.post(
      "/users/register",
      {
        ...state,
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
          },
        ]}
      >
        {toastMessgae && (
          <p className={toastMessgae.toastClass}>{toastMessgae.message}</p>
        )}
        <Textbox
          placeholder="Enter Name"
          type="text"
          onChangeFn={(name) => {
            dispatchFn("SET_NAME", name);
          }}
        />
        <Textbox
          placeholder="Enter Username"
          type="text"
          onChangeFn={(uname) => {
            dispatchFn("SET_USERNAME", uname);
          }}
        />

        <Textbox
          placeholder="Enter Email"
          type="email"
          onChangeFn={(email) => {
            dispatchFn("SET_EMAIL", email);
          }}
        />
        <Textbox
          placeholder="Enter Password"
          type="password"
          onChangeFn={(pwd) => {
            dispatchFn("SET_PSD", pwd);
          }}
        />
        <Textbox
          placeholder="Enter Confirmed Password"
          type="password"
          onChangeFn={(cpwd) => {
            dispatchFn("SET_CONFIRMPSD", cpwd);
          }}
        />
        <Textbox
          placeholder="Enter Designation"
          type="text"
          onChangeFn={(designation) => {
            dispatchFn("SET_DESIGNATION", designation);
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
Register.defaultProps = {
  userName: "Guest",
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
