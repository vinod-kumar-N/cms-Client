import React from "react";
import Header from "./components/header";
import Login from "./components/login";
import "./modal.css";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };
  render() {
    return (
      <>
        <Header callLogin={this.toggleLogin} />
        <section className="mainContent">
          {this.state.isLogin && <Login closeModal={this.toggleLogin} />}
        </section>
      </>
    );
  }
}

export default App;
