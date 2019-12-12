import React from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/contact/Add" component={AddContact}></Route>
                <Route
                  exact
                  path="/contact/Edit/:id"
                  component={EditContact}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
