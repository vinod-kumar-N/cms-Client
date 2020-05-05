import React from "react";
import "./modal.css";
import "./App.scss";
import "./components/banner/banner.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDetails from "./components/contentSlot/contentDetails";
import HomeComponent from "./components/homeContent";
import PageBuilder from "./components/pageBuilder";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/pageBuilder">
              <PageBuilder />
            </Route>
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
