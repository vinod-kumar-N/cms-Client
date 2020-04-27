import React from "react";
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import "./modal.css";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isRegister:false
    };
  }
  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };
  toggleRegister = () => {
    this.setState({ isRegister: !this.state.isRegister });
  };
  render() {
    return (
      <>
        <Header callLogin={this.toggleLogin} callRegister={this.toggleRegister}/>
        <section className="mainContent">
          {this.state.isLogin && <Login closeModal={this.toggleLogin} />}
          {this.state.isRegister && <Register closeModal={this.toggleRegister} />}
        </section>
        
      </>
    );
  }
}

export default App;
