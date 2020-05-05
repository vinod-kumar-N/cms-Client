import React from "react";
import "./modal.css";
import "./App.scss";
import "./components/banner/banner.scss";
import "./components/contentSlot/contentSlot.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDetails from "./components/contentSlot/contentDetails";
import HomeComponent from "./components/homeContent";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/contentDetails">
              <ContentDetails />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
