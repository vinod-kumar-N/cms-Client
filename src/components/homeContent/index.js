import React from "react";
import Header from "../header";
import Footer from "../footer";
import Login from "../login";
import Register from "../register";
import Banner from "../banner";
import ContentSlot from "../contentSlot";
import Promo from "../promo";
import { Link } from "react-router-dom";
class HomeComponent extends React.Component {
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
        <Header
          callLogin={this.toggleLogin}
          callRegister={this.toggleRegister}
        />
        <section className="mainContent">
          {this.state.isLogin && <Login closeModal={this.toggleLogin} />}
          {this.state.isRegister && (
            <Register closeModal={this.toggleRegister} />
          )}
          <Banner></Banner>
          <ContentSlot></ContentSlot>
          <div className={"pageTemplate"}>
            <Promo
              title={"Template"}
              src="./website.png"
              content={"Hello World"}
            >
              <p>asdasdasdads</p>
              <Link to="/pageBuilder">Click Here</Link>
            </Promo>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default HomeComponent;
