import React from "react";
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Banner from "./components/banner";
import "./modal.css";
import "./App.scss";
import "./components/banner/banner.scss";
import Footer from "./components/footer";
import ContentSlot from "./components/contentSlot";
import "./components/contentSlot/contentSlot.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDetails from "./components/contentSlot/contentDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isRegister: false,
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
        <Router>
          <Header
            callLogin={this.toggleLogin}
            callRegister={this.toggleRegister}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <section className="mainContent">
                  {this.state.isLogin && (
                    <Login closeModal={this.toggleLogin} />
                  )}
                  {this.state.isRegister && (
                    <Register closeModal={this.toggleRegister} />
                  )}

                  <Banner></Banner>
                  <ContentSlot></ContentSlot>
                </section>
              )}
            ></Route>
            <Route path="/contentDetails" component={ContentDetails}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </>
    );
  }
}

export default App;
